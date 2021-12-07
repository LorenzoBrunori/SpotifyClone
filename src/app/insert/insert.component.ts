import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Album, Artista, TrackList } from '../shared/artista.interface';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  @ViewChild('formObj', { static: false }) slForm: NgForm;
  isLoading: boolean = false;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const value = form.value;
    console.log(value)
    const body: Artista =
      new newArtist(value.genre, value.name, value.bio, value.is_band, 
      new newAlbum(value.name_album, value.year, value.awards, 
      new newTrack(value.name_track, value.time)
      ));
    this.http.post<Artista>('http://localhost:3000/searchJson/', body)
      .subscribe(data => {
        console.log(data)
      })
  }

}
export class newTrack implements TrackList {
  name_track: string;
  time: string;
  /**
   *
   */
  constructor(name_track, time) {
    this.name_track = name_track;
    this.time = time;
  }
}
export class newAlbum implements Album {
  name_album: string;
  year: string;
  awards: string;
  track_list: TrackList[];

  //ctor
  /**
   *
   */
  constructor(name_album, year, awards, track_list) {
    this.name_album = name_album;
    this.year = year;
    this.awards = awards;
    this.track_list = track_list;
  }
}
export class newArtist implements Artista {
  id: number;
  genre: string;
  name: string;
  imagePath: string;
  bio: string;
  is_band: boolean;
  album: Album[];
  /**
   *
   */
  constructor(genre, name, bio, is_band, album) {
    this.genre = genre;
    this.name = name;
    this.bio = bio;
    this.is_band = is_band;
    this.album = album;
  }
}