import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Notice } from '../models/notice';

@Injectable({
  providedIn: 'root'
})
export class NoticesService {

  _url = 'https://localhost:44310/api/noticias'
  private httpHeaders  = new HttpHeaders ({'Content-Type':'application/json'})

  constructor(
    private http: HttpClient
  ) {
    console.log('Servicio Noticias')
  }

  getNoticias() {
    let header = new HttpHeaders()
    .set('Type-content', 'aplication/json')

    return this.http.get(this._url, {
      headers: header
    });
  }

  addNotice(notice: Notice) {
    return this.http.post(this._url, notice);
  }

}
