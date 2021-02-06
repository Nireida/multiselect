import {ChangeDetectionStrategy, Component} from '@angular/core';
import {AppService} from "./app.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  data$ = this.service.getAllData();
  selectedArr = [];

  constructor(
    public service: AppService
  ) {}

  selectValue (data) {
    if(!this.selectedArr.filter(el => el.key === data.key).length) {
      this.selectedArr = [...this.selectedArr, {title: data.title, key: data.key}];
    } else {
      this.selectedArr = this.selectedArr.filter(el => el.key !== data.key);
    }
  }

  deleteElements(delElement, data) {
    this.selectedArr = this.selectedArr.filter(el => el.key !== delElement.key);
    // data.map(el => {
    //
    // })
  }
}
