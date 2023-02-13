import { Injectable } from '@angular/core';
import {HttpClient, HttpEvent, HttpRequest} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ImagesPushService {

  constructor(private http:HttpClient) { }
  pushFileToStorage(file: File): Observable<HttpEvent<{}>> {
    const formdata: FormData = new FormData();

    formdata.append('file', file);
    // @ts-ignore
    console.log("hellooooo",formdata);
    // @ts-ignore
    const req = new HttpRequest('POST', 'http://localhost:8080/uploadPhoto', formdata, {
      reportProgress: true,
      responseType: 'text'
    });

    return this.http.request(req);
  }

  getFiles(): Observable<any> {
    return this.http.get('http://localhost:8080');
  }


}
