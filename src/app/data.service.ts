import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})

export class DataService {
  public Movies$: Object;
  public CharacterName$: String[];
  public Title$: String;
  public ReleaseDate$: String;
  public OpeningCrawl$: String;
  public Produced$: String;
  public Directed$: String;

  constructor(private http: HttpClient) { }

  public Movies() {
    return this.http.get('https://swapi.co/api/films/');
  }

  public CharactersName(url: any) {
    return this.http.get(url);
  }
  public getSelectedMovie(MovieName: any) {
    if (!MovieName) {
      this.Movies().subscribe(
        data => {
          this.Movies$ = data['results'];

          if (this.Movies$['title'] === MovieName) {
              this.ReleaseDate$ = this.Movies$['release_date'];
              this.OpeningCrawl$ = this.Movies$['opening_crawl'];
              this.Title$ = this.Movies$['title'];
              this.Produced$ = this.Movies$['producer'];
              this.Directed$ = this.Movies$['director'];
          }
        });
    }
  }
}
