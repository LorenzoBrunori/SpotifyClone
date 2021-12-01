import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SearchJson from 'src/app/mock/search.json';
import { Artista } from 'src/app/shared/artista.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  artisti = SearchJson;
  artista: Artista;
  id: string;
  sub;
  mostraCanzoni: boolean[] = [];
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
    this.getArtista(+this.id);

    this.artista.album.forEach(album => {
      this.mostraCanzoni.push(false);
    });
    console.log(this.mostraCanzoni);
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
}


