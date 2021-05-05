import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

const headers = new HttpHeaders()
  .set('content-type', 'application/json')
  .set('Access-Control-Allow-Origin', '*');

@Injectable({
  providedIn: 'root'
})
export class PesquisaHashtagsService {

  constructor(protected http: HttpClient){
    
  }

  load(url){
    return this.http.get(`url`, {'headers': headers});
  }
}
