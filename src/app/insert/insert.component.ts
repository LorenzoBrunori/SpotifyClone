import { Component, OnInit, ViewChild } from '@angular/core';

import { HttpClient } from '@angular/common/http';
import { NgForm } from '@angular/forms';
import { Artista } from '../shared/artista.interface';

@Component({
  selector: 'app-insert',
  templateUrl: './insert.component.html',
  styleUrls: ['./insert.component.css']
})
export class InsertComponent implements OnInit {
  @ViewChild('formObj', {static: false})  slForm: NgForm;
  isLoading: boolean = false;
  newArtist;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    const body = {title: 'bho?'};
    this.http.post<Artista>('http://localhost:3000/searchJson/',body)
    .subscribe(data => {
      console.log(data);
    })
  }


  onSubmit(form:NgForm){
    const value = form.value;
    console.log(value)
    //recuperiamo dal form gli input come pusho tramite http?
    
  }

}
