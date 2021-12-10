import { AfterViewChecked, Component, OnInit, ViewChild } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import SearchJson from 'src/assets/mock/search.json';
import { Artista } from 'src/app/shared/artista.interface';
import {NgForm } from '@angular/forms';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, AfterViewChecked {
  artisti = SearchJson.searchJson;
  artista: Artista;
  id: string;
  sub;
  mostraCanzoni: boolean[] = [];
  updating: boolean = false;
  @ViewChild('formObj', {static: false}) slForm: NgForm;

  constructor(
    private route: ActivatedRoute,
    private router: Router) {

  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
    this.getArtista(+this.id);
    //Vengono creati tanti valori booleani quanti sono gli album dell'artista
    this.artista.album.forEach(album => {
      this.mostraCanzoni.push(false);
    });

  }

  ngAfterViewChecked(){
    console.log(this.slForm);
    
  }

  getArtista(id: number) {
    const art = this.artisti[this.id]; //solo per non scrivere mille volte this.artisti[id]
    this.artista = {
      id: art.id,
      genre: art.genre,
      name: art.name,
      imagePath: art.imagePath,
      bio: art.bio,
      is_band: art.is_band,
      album: art.album
    };
  }

  showTracks(i: number){
    this.mostraCanzoni[i] = !this.mostraCanzoni[i];
  }
  
  goToSongForm(albumName :string, id: number){
    const artId = id + '';
    this.router.navigate(
      ['insert/album/tracks'], {
      queryParams: { albumName: albumName, id: artId }
    });
  }

  goToAlbumForm(id: number){
    const artId = id + '';
    this.router.navigate(
      ['insert/album'], {
      queryParams: { id: artId }
    });
  }


  goToArtist(){
    this.updating = true;
  }

  onUpdate(form: NgForm){
    
  }
}


