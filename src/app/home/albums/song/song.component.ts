import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SearchJson from 'src/app/mock/search.json';
import { Artista } from 'src/app/shared/artista.interface';

@Component({
  selector: 'app-song',
  templateUrl: './song.component.html',
  styleUrls: ['./song.component.css']
})
export class SongComponent implements OnInit, OnDestroy {

  artisti = SearchJson;
  id: string;
  sub;
  artista: Artista;
  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });

    const art = this.artisti[this.id];
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
  ngOnDestroy() {
    this.sub.unsubscribe();
  }
}
