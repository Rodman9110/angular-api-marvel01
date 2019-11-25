import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Observable } from 'rxjs';//permite ayuda a flitrar los datos de la api
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class CharactersApiService {

  PUBLIC_KEY ='92573a37f091c226dbe2be173dfb765a';
  HASH = '083d1686ceaab83b1a9aa5acbfc81927';
  CHARACTER = ''
  URL_API = `https:gateway.marvel.com/v1/public/characters?${this.CHARACTER}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`;

  constructor(private http: HttpClient) { }

  

    getAllCharacters(): Observable<any>{
      return this.http.get<any>(this.URL_API)
      .pipe(map((data: any) => data.data.results))
    }

    getCharacter(termino: string){
      console.log(termino);
      return this.http.get<any>(`https:gateway.marvel.com/v1/public/characters?name=${termino}&apikey=${this.PUBLIC_KEY}&hash=${this.HASH}`)
      .pipe(map((data: any) => data.data.results))
      
      

    }
}
