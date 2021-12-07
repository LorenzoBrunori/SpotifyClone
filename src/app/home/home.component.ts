import { Component, OnInit } from '@angular/core';
import SearchJson from 'src/assets/mock/search.json';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})


export class HomeComponent implements OnInit {

  artisti = SearchJson.searchJson;

  constructor() {}

  ngOnInit(): void {
  }

}
