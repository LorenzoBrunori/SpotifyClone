import { Component, OnInit, ViewChild } from '@angular/core';
import { FormArray, FormControl, FormGroup, NgForm } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Album, Artista, TrackList } from '../shared/artista.interface';
import { DataStorageService } from '../shared/data-storage.service';

@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {
  
  @ViewChild('formObj', {static: false}) slForm: NgForm;
  id: string;
  artista: Artista = new newArtista();
  isBand: string = '';


  constructor(
    private dataHandling: DataStorageService, 
    private router: Router,
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParams['id'];
    this.dataHandling.getArtista(this.id).subscribe(art => {
      this.artista = art;
      this.isBand = art.is_band.toString();
    });  
  }

  eliminaAlbum(albumIndex: number){
    this.artista.album.splice(albumIndex,1);
  }

  eliminaCanzone(albumIndex: number, songIndex: number){
    this.artista.album[albumIndex].track_list.splice(songIndex,1);
  }

  onSubmit(){
    if(this.isBand === 'true')
      this.artista.is_band = true;
    else
      this.artista.is_band = false;

    this.dataHandling.putArtista(this.artista, this.id).subscribe(data => {
      console.log('yuppy');
      this.router.navigate(['/albums/' + this.id]);
    })
  }
}




class newArtista implements Artista{
  id: number;
  genre: string;
  name: string;
  imagePath: string;
  bio: string;
  is_band: boolean;
  album: Album[];

  constructor(){
    this.id = 0;
    this.genre = '';
    this.name = '';
    this.imagePath = '';
    this.bio = '';
    this.is_band = true;
    this.album = [];
  }
}
