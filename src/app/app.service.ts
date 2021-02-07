import {ChangeDetectorRef, Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {of} from 'rxjs';
import {catchError, delay, map, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllData() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('x-apikey', '4d4155a374733a23d0446976b76ad9344c1e9');
    return this.http.get<any>(`https://testdb-0439.restdb.io/rest/folders`, {headers, withCredentials: true})
      .pipe(
        map(res => res.map(el => getParents(el))),
        catchError(() => of('error')));
  }

  getAllDataZorro() {
    let headers = new HttpHeaders();
    headers = headers.append('Content-Type', 'application/json');
    headers = headers.append('x-apikey', '4d4155a374733a23d0446976b76ad9344c1e9');
    return this.http.get<any>(`https://testdb-0439.restdb.io/rest/folders`, {headers, withCredentials: true})
      .pipe(
        map(res => res.map(el => getZorroData(el))),
        catchError(() => of(null)));
  }
}

function getParents(el, parentsArr = []) {
  const elementArr = [...parentsArr, el.id];
  el.parents = parentsArr;
  if (el.childrenCount) {
    el.children.forEach((node) =>  getParents(node, elementArr));
  }
  return el;
}

function getZorroData(el) {
  el.key = el.id + ',' + el.name;
  el.title = el.name;
  el.isLeaf = !el.childrenCount;
  el.expanded = !!el.childrenCount
  if (!el.isLeaf) {
    el.children.forEach(node => getZorroData(node));
  }
  return el;
}
