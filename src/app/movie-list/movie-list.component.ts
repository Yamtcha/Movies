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
  Title$: String;
  ReleaseDate$: String;
  OpeningCrawl$ = 'ntwana';

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.Movies().subscribe(
        data => { this.Movies$ = data['results'];
                this.Title$ = this.Movies$['title'];
                // this.ReleaseDate$ = this.Movies$['release_date'];
                this.OpeningCrawl$ = this.Movies$['opening_crawl'];
      }
    );
  }
}
