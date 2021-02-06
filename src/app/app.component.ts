import {ChangeDetectionStrategy, ChangeDetectorRef, Component} from '@angular/core';
import {AppService} from "./app.service";
import {of} from "rxjs";
import {map, tap} from "rxjs/operators";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class AppComponent {
  data$ = this.service.getAllData();
  selectedArr = [];
  parentsArr = [];

  constructor(
    public service: AppService,
    public cdr: ChangeDetectorRef
  ) {
  }

  selectValue(data, allData) {
    data = this.setValueToChildren(data, data.value);
    this.setDataToAllData(data, allData);
  }

  deleteElements(delElement, data) {
    this.selectedArr = this.selectedArr.filter(el => el.id !== delElement.id);
    this.getParentsArr();
    this.data$ = of(data.map(el => {
      el = this.changeElValue(el);
      return el;
    })).pipe(
      map((data) => {
        return data.map(element => this.setValueToParents(element));
      }),
      tap(() => {
      this.cdr.detectChanges()
    }));
  }

  getParentsArr() {
    this.parentsArr = [];
    this.selectedArr.forEach((el) => this.parentsArr = [...this.parentsArr, ...el.parents]);
    this.parentsArr = Array.from(new Set(this.parentsArr));
  }

  setValueToChildren(data, value) {
    data.value = value;
    if (data.childrenCount) {
      for (let node of data.children) {
        this.setValueToChildren(node, value);
      }
    } else {
      if (value) {
        this.selectedArr = [...this.selectedArr, {name: data.name, id: data.id, parents: data.parents}];
      } else {
        this.selectedArr = this.selectedArr.filter(el => el.id !== data.id);
      }
    }
    return data;
  }

  setValueToParents(data) {
    if (data.childrenCount) {
      data.value = this.parentsArr.indexOf(data.id) > -1;
      for (let node of data.children) {
        this.setValueToParents(node);
      }
    }
    return data;
  }

  setDataToAllData(data, allData) {
    this.data$ = of(allData.map((el) => {
      return this.setData(el, data);
    })).pipe(
      map((data) => {
      this.getParentsArr();
      return data.map(element => this.setValueToParents(element));
    }),
      tap(() => this.cdr.detectChanges()));
  }

  setData(el, data) {
    if (el.id === data.id) {
      return data;
    } else {
      if (el.childrenCount) {
        for (let node of el.children) {
          this.setData(node, data);
        }
      }
      return el;
    }
  }

  changeElValue(el) {
    if (el.childrenCount) {
      for (let node of el.children) {
        node = this.changeElValue(node);
      }
    } else {
      el.value = !!this.selectedArr.filter(element => el.id === element.id).length;
    }
    return el;
  }
}
