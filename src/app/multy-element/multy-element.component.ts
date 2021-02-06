import {ChangeDetectionStrategy, ChangeDetectorRef, Component, EventEmitter, Input, Output} from '@angular/core';
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
export class MultyElementComponent {
  @Input() node;
  @Output() valueChange = new EventEmitter();

  constructor(
    public cdr: ChangeDetectorRef
  ) {
  }

  selectValue = (element) => (this.valueChange.emit(element));

  changeLeafOpen(){
    this.node.isClosed = !this.node.isClosed;
    this.cdr.markForCheck();
  }
}
