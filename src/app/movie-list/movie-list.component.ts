import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-movie-list',
  templateUrl: './movie-list.component.html',
  styleUrls: ['./movie-list.component.scss']
})

export class MovieListComponent implements OnInit {

  Movies$: Object;
  Characters$: String[];

  constructor(private data: DataService) { }

  ngOnInit() {
    this.data.Movies().subscribe(
      data => {
        this.Movies$ = data['results'];
        const characters = [];

        /// Reading the characters from the API
        for (const character in this.Movies$[0]['characters']) {
          if (character in this.Movies$[0]['characters']) {
            const response = fetch(this.Movies$[0]['characters'][character]).then((Pr) => {
              const e = Pr.json().then(function (readCharacterdetails) {
                characters.push(readCharacterdetails['name']);
              });
            });
          }
        }
        this.Characters$ = characters ;
      });
  }
}
