import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Observable } from 'rxjs';//permite ayuda a flitrar los datos de la api
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY ='';
  HASH = '';
  URL_API = `https://gateway.marvel.com/v1/public/characters?name=thor&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

    getAllCharacters(): Observable<any>{
      return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) =>data.data.results))
    }

}
