import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from "rxjs/Observable";

@Injectable({
  providedIn: 'root'
})
export class ForeignService {

  private flickrParams = {
    params: {
      api_key:'c28c40210d45d354468a989246cd4b54',
      format:'json',
      nojsoncallback:'1',
      per_page:'30'
    }
  }

  private flickrUrl = "https://api.flickr.com/services/rest/";

  constructor(private http: HttpClient) { }

  getDishPics(pageNumber:number): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.search';
    this.flickrParams.params['tags'] = 'food';
    this.flickrParams.params['text'] = 'food';
    this.flickrParams.params['page'] = pageNumber.toString();
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  getDishInfo(photoId:number): Observable<any> {
    const API_URL = this.flickrUrl;
    this.flickrParams.params['method'] = 'flickr.photos.getInfo';
    this.flickrParams.params['photo_id'] = photoId;
    return this.http.get<any>(API_URL,this.flickrParams);
  }

  formFlickrData(food:any): string {
    return 'http://farm'+food.farm+'.static.flickr.com/'+food.server+'/'+food.id+'_'+food.secret+'.jpg';
  }

  createToast(message:string, backgroundColor:string) {
    console.log("tst");
    let snackbar = document.getElementById("snackbar");
    console.log(snackbar);
    snackbar.className = "showToast";
    snackbar.style.background = backgroundColor || "#000";
    snackbar.innerHTML = message;
    setTimeout(() => {
      snackbar.className = snackbar.className.replace("showToast", "");
    }, 3000);
  }

  // postRequest(url:string, body:any): Observable<any> {
  //   const API_URL = this.apiUrl.concat(url);
  //   return this.http.post<any>(API_URL,body);
  // }
}
