import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, Artista, TrackList } from 'src/app/shared/artista.interface';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-insert-album',
  templateUrl: './insert-album.component.html',
  styleUrls: ['./insert-album.component.css']
})
export class InsertAlbumComponent implements OnInit {
  isLoading = false;
  id: string;
  artista: Artista;
  trackList: TrackList[] = [];
  nomeTraccia: string = '';
  durataTraccia: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataHandling: DataStorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.dataHandling.getArtista(this.id).subscribe(art => {
      this.artista = art;
    });    
  }


  onSubmit(form: NgForm){
    this.dataHandling.insertAlbum(this.artista, this.id, form).subscribe(data => {
      this.router.navigate(
        ['tracks'], {
          relativeTo: this.route,
          queryParamsHandling: 'merge',
          queryParams: { albumName: form.value.name_album }
      });
    })
  }
}



