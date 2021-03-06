import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SearchJson from 'src/app/mock/search.json';
import { Artista } from 'src/app/shared/artista.interface';

@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit, OnDestroy {
  artisti = SearchJson;
  id: string;
  sub;
  mostraCanzoni = false;

  artista: Artista;
  constructor(private route: ActivatedRoute) {

  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    });
    
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



    // This params is deprecated

    //this.sub=this._Activatedroute.params.subscribe(params => { 
    //    this.id = params['id']; 
    //    let products=this._productService.getProducts();
    //    this.product=products.find(p => p.productID==this.id);    
    //
    //});
  }

  ngOnDestroy(){
    this.sub.unsubscribe();
  }
}

