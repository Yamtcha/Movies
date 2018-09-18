import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-movie',
  templateUrl: './movie.component.html',
  styleUrls: ['./movie.component.scss']
})
export class MovieComponent implements OnInit {

  CharacterName$: String[];
  Movies$: Object;
  constructor(private data: DataService, ) { }


  ngOnInit() {

  }
  getSelectedMovie(MovieName: any) {

    if (!MovieName) {
      this.data.Movies().subscribe(
        data => {
          this.Movies$ = data['results'];

          if (this.Movies$['title'] === MovieName) {
            for (let i = 0; i < this.Movies$['characters'].length(); i++) {
              this.data.CharactersName(data['characters'][i]).subscribe(character => {
                this.CharacterName$ = character['name'];
              });
            }
          }
        });
    }

  }
}
