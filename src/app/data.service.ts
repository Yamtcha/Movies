import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http: HttpClient) {}

  public Movies() {
    return this.http.get('https://swapi.co/api/films/');
  }

  public CharactersName(url: any) {
    return this.http.get(url);
  }
}
