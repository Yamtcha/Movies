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

  constructor(private data: DataService) {}

  ngOnInit() {
    this.data.Movies().subscribe(
        data => { this.Movies$ = data['results']; }
    );
  }
}
