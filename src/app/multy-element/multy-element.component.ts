import {
  ChangeDetectionStrategy,
  ChangeDetectorRef,
  Component,
  EventEmitter,
  Input,
  OnChanges,
  Output
} from '@angular/core';
import {animate, state, style, transition, trigger} from "@angular/animations";

@Component({
  selector: 'app-multy-element',
  templateUrl: './multy-element.component.html',
  styleUrls: ['./multy-element.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  animations: [
    trigger('changeOpen', [
      state('false', style({
        transform: 'rotate(0)'
      })),
      state('true', style({
        transform: 'rotate(-90deg)'
      })),
      transition('* =>true', animate('500ms ease')),
      transition('* =>false', animate('500ms ease')),
    ])
  ]
})
export class MultyElementComponent implements OnChanges {
  @Input() node;
  @Output() valueChange = new EventEmitter();
  isAllSelected = false;

  constructor(
    public cdr: ChangeDetectorRef
  ) {
  }

  ngOnChanges() {
    this.isAllSelected = this.node.childrenCount && this.getIfAllIsChecked(this.node);
  }

  getIfAllIsChecked(node) {
    if (node.children.filter(el => el.value).length !== node.childrenCount) {
      return true;
    } else {
      for (let el of node.children) {
        if (el.childrenCount) {
        return  this.getIfAllIsChecked(el);
        }
      }
    }
  }

  selectValue(element) {
    this.valueChange.emit(element);
  }

  changeLeafOpen() {
    this.node.isClosed = !this.node.isClosed;
    this.cdr.markForCheck();
  }
}
