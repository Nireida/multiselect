import {ChangeDetectionStrategy, Component, EventEmitter, Input, Output} from '@angular/core';

@Component({
  selector: 'app-selected-elements',
  templateUrl: './selected-elements.component.html',
  styleUrls: ['./selected-elements.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class SelectedElementsComponent {
@Input() selectedElements;
@Output() selectedElementsChange = new EventEmitter();

  deleteData(data) {
    this.selectedElementsChange.emit(data);
  }
}
