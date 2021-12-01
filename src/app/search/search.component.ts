import SearchJson from 'src/app/mock/search.json';

import { Component, OnInit } from '@angular/core';
import { Artista } from '../shared/artista.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {
  searchTerm: string;
  artisti: Artista[];
  artistiCopy: Artista[];

  constructor() { }

  ngOnInit(): void {
        this.artisti = SearchJson;
        this.artistiCopy = this.artisti;
        console.log(this.artisti);
  }

  search(value: string): void {
    this.artisti = this.artistiCopy.filter((val) => val.name.toLowerCase().includes(value));
    // this.artistiCopy.album.forEach(element => {
      
    // });
  }
}
