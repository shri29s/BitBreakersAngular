import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { startup } from '../models/startup';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StartupService {
  baseURL: string = "http://localhost:8080/api";
  httpclient: HttpClient;
  constructor(httpclient: HttpClient) {
    this.httpclient = httpclient;
  }

  addStartup(startup: startup) {
    return this.httpclient.post(`${this.baseURL}/addStartup`, startup, { responseType: 'text' });
  }

  getAllStartup(): Observable<startup[]> {
    return this.httpclient.get<startup[]>(`${this.baseURL}/all`);
  }
}
