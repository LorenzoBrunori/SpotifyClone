import { Component, OnInit } from '@angular/core';
import SearchJson from 'src/app/mock/search.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  artisti = SearchJson;

  constructor() {
    console.log(this.artisti);
  }

  ngOnInit(): void {
  }

  

}
