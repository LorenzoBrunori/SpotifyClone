import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AlbumsComponent } from './Home/albums/albums.component';
import { SearchComponent } from './search/search.component';
import { AppRoutingModule } from './app-routing.module';
import { SearchFilterPipe } from './search/search-filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { InsertComponent } from './insert/insert.component';
import { LoadingSpinnerComponent } from './shared/loading-spinner/loading-spinner.component';
import { HttpClientModule } from '@angular/common/http';
import { InsertAlbumComponent } from './insert/insert-album/insert-album.component';
import { InsertTracksComponent } from './insert/insert-tracks/insert-tracks.component';
import { EditComponent } from './edit/edit.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AlbumsComponent,
    SearchComponent,
    SearchFilterPipe,
    InsertComponent,
    LoadingSpinnerComponent,
    InsertAlbumComponent,
    InsertTracksComponent,
    EditComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
