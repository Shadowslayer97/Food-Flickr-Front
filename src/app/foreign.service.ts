import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ForeignService {

  private flickrParams = {
    params: {
      method:'flickr.photos.search',
      api_key:'ca370d51a054836007519a00ff4ce59e',
      tags:'food',
      format:'json',
      nojsoncallback:'1'
    }
  }

  constructor(private http: HttpClient) { }

  getDishPics(userParams:any): Observable<any> {
    const API_URL = environment.flickrUrl;
    console.log(API_URL);
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  // postRequest(url:string, body:any): Observable<any> {
  //   const API_URL = environment.apiUrl.concat(url);
  //   return this.http.post<any>(API_URL,body);
  // }
}
