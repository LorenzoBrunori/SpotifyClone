import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import SearchJson from 'src/app/mock/search.json';
@Component({
  selector: 'app-albums',
  templateUrl: './albums.component.html',
  styleUrls: ['./albums.component.css']
})
export class AlbumsComponent implements OnInit {
  artisti = SearchJson;
  id: string;
  name: string;
  sub
  constructor(private route: ActivatedRoute) {
  }

  ngOnInit(): void {
    this.sub = this.route.paramMap.subscribe(params => {
      console.log(params);
      this.id = params.get('id');
    });
  }
}


