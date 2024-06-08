import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class TableapiService {
  url = `https://freetestapi.com/api/v1/products`;

  constructor(private httpservice: HttpClient) {}

  getProductsList() {
    return this.httpservice.get<Array<any>>(this.url);
  }
}
