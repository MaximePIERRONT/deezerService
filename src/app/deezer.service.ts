import {Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";

@Injectable({
  providedIn: 'root'
})
export class DeezerService {

  constructor(private http: HttpClient) {

  }

  public getArtist(name:string){
    const encodedName = encodeURI(name);
    const url:string = 'https://cors-anywhere.herokuapp.com/https://api.deezer.com/search/artist/autocomplete?limit=1&q=' + encodedName;
    return this.http.get(url)
  }
}
