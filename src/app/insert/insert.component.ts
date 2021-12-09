import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Album, Artista, TrackList } from '../shared/artista.interface';
import { ActivatedRoute, Router } from '@angular/router';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  @ViewChild('formObj', { static: false }) slForm: NgForm;
  isLoading: boolean = false;

  constructor(
    private router: Router,
    private route: ActivatedRoute,
    private dataHandling: DataStorageService
    ) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm) {
    const artista = this.createArtista(form.value);
    this.dataHandling.postArtista(artista).subscribe(data => {
        this.router.navigate(
          ['album'],{relativeTo: this.route, 
          queryParams: {id: data.id}
        });
      })
  }

  createArtista(value: any) {
    let isBand: boolean = false;
    if (value.is_band === "true")
      isBand = true;
    const body: Artista =
      new newArtist(value.genre, value.name, value.imagePath, value.bio, isBand);

    return body;
  }
}


//================================================================
//=========================classes================================
//================================================================
class newArtist implements Artista {
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
  constructor(genre, name, imagePath, bio, is_band) {
    this.genre = genre;
    this.name = name;
    this.imagePath = imagePath;
    this.bio = bio;
    this.is_band = is_band;
    this.album = [];
  }
}