import {ChangeDetectionStrategy, ChangeDetectorRef, Component, OnDestroy, ViewChild} from '@angular/core';
import {NzTreeComponent} from "ng-zorro-antd";
import {AppService} from "../../app.service";
import {Subscription} from "rxjs";

@Component({
  selector: 'app-zorro',
  changeDetection: ChangeDetectionStrategy.OnPush,
  styleUrls: ['./zorro.component.scss'],
  templateUrl: './zorro.component.html'
})
export class ZorroComponent implements OnDestroy {

  @ViewChild('nzTreeComponent', {static: false}) nzTreeComponent!: NzTreeComponent;

  nodes;
  checkedKeys = [];
  subscription: Subscription;
  loading = true;

  constructor(
    private service: AppService,
    private cdr: ChangeDetectorRef
  ) {
    this.subscription = this.service.getAllDataZorro().subscribe(
      response => this.nodes = response,
      () => {},
      () => {
        this.loading = false;
        this.cdr.detectChanges()
      });
  }

  fillCheckedKeys = (nodes): void => nodes.forEach(node => {
    node.origin && (node = node.origin);
    const hasChildren = node && node.children && node.children.length;
    const isChecked = node && node.checked;
    !hasChildren && isChecked && this.checkedKeys.push(node && node.key);
    hasChildren && this.fillCheckedKeys(node && node.children);
  })

  deleteIndex = (index: number) => this.checkedKeys = this.checkedKeys.filter((x, i) => i !== index);

  ngOnDestroy(){
    this.subscription.unsubscribe();
    this.subscription = null;
  }
}
