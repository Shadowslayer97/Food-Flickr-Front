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
      api_key:'c28c40210d45d354468a989246cd4b54',
      format:'json',
      nojsoncallback:'1'
    }
  }

  constructor(private http: HttpClient) { }

  getDishPics(userParams:any): Observable<any> {
    const API_URL = environment.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.search';
    this.flickrParams.params['tags'] = 'food';
    this.flickrParams.params['text'] = 'food';
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  getDishInfo(photoId:number): Observable<any> {
    const API_URL = environment.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.getInfo';
    this.flickrParams.params['photo_id'] = photoId;
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  formFlickrData(food:any): string {
    return 'http://farm'+food.farm+'.static.flickr.com/'+food.server+'/'+food.id+'_'+food.secret+'.jpg';
  }

  // postRequest(url:string, body:any): Observable<any> {
  //   const API_URL = environment.apiUrl.concat(url);
  //   return this.http.post<any>(API_URL,body);
  // }
}
