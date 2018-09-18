import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})



export class DataService {

  constructor(private http: HttpClient) {}

  public JSON() {
    return this.http.get('https://swapi.co/api/films/');
  }

}
