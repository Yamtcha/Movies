import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchMovieComponent } from './search-movie/search-movie.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';


const routes: Routes = [
  {
    path: '',
    component: AppComponent
  },
  {
    path: 'SearchMovie/:id',
    component: SearchMovieComponent
  },
  {
    path: 'movieList',
    component: MovieListComponent
  },
];
@NgModule({
  declarations: [
    AppComponent,
    SearchMovieComponent,
    MovieListComponent,
  ],
  imports: [
    HttpClientModule,
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot([
      { path: '', component: AppComponent},
      { path: 'SearchMovie', component: SearchMovieComponent},
      { path: 'movieList', component: MovieListComponent},
    ])
  ],
  providers: [],
  bootstrap: [AppComponent]
})

export class AppModule { }
