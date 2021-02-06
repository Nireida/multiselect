import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {of} from "rxjs";
import {delay} from "rxjs/operators";

@Injectable({
  providedIn: 'root'
})
export class AppService {

  constructor(
    private http: HttpClient
  ) {
  }

  getAllData() {
    const header = new HttpHeaders();
    header.append('Content-Type', 'application/json');
    header.append( 'x-api-key', '4d4155a374733a23d0446976b76ad9344c1e9');
    // return this.http.get<any>(`https://testdb-0439.restdb.io/rest/folders`, { headers: header });
    return of([
      {
        title: '0-0',
        key: '0-0',
        expanded: true,
        children: [
          {
            title: '0-0-0',
            key: '0-0-0',
            children: [
              { title: '0-0-0-0', key: '0-0-0-0', isLeaf: true },
              { title: '0-0-0-1', key: '0-0-0-1', isLeaf: true },
              { title: '0-0-0-2', key: '0-0-0-2', isLeaf: true }
            ]
          },
          {
            title: '0-0-1',
            key: '0-0-1',
            children: [
              { title: '0-0-1-0', key: '0-0-1-0', isLeaf: true },
              { title: '0-0-1-1', key: '0-0-1-1', isLeaf: true },
              { title: '0-0-1-2', key: '0-0-1-2', isLeaf: true }
            ]
          },
          {
            title: '0-0-2',
            key: '0-0-2',
            isLeaf: true
          }
        ]
      },
      {
        title: '0-2',
        key: '0-2',
        isLeaf: true
      }
    ]).pipe(delay(1000));
  }
}
