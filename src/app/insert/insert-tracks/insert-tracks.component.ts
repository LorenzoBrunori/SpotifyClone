import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, Artista, TrackList } from 'src/app/shared/artista.interface';
import { DataStorageService } from 'src/app/shared/data-storage.service';

@Component({
  selector: 'app-insert-tracks',
  templateUrl: './insert-tracks.component.html',
  styleUrls: ['./insert-tracks.component.css']
})
export class InsertTracksComponent implements OnInit {

  isLoading = false;
  id: string;
  albumName : string;
  artista: Artista;
  album: Album;
  trackList: TrackList[] = [];
  nomeTraccia: string = '';
  durataTraccia: string = '';

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataHandling: DataStorageService) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.albumName = this.route.snapshot.queryParams['albumName'];
    this.dataHandling.getArtista(this.id).subscribe(art => {
      this.artista = art;
      for (let alb of this.artista.album) {
        if (alb.name_album === this.albumName) {
          this.trackList = alb.track_list;
          break;
        }
      }
    });
  }

  addSong() {
    for (let alb of this.artista.album) {
      if (alb.name_album === this.albumName) {
        alb.track_list.push({ name_track: this.nomeTraccia, time: this.durataTraccia });
        this.trackList= alb.track_list;
        this.nomeTraccia = '';
        this.durataTraccia = '';
      }
    }
  }

  onSubmit(){
    this.dataHandling.putArtista(this.artista, this.id).subscribe(data => {
      this.router.navigate(['/albums/'+this.id]);
      console.log(data);
    })
  }
}
