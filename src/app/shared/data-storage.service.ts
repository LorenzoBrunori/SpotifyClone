import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { Album, Artista, TrackList } from "./artista.interface";

@Injectable({providedIn: 'root'})
export class DataStorageService {

    constructor(private http: HttpClient){}

    getArtista(id: string){
        return this.http.get<Artista>('http://localhost:3000/searchJson/' + id);
    }

    insertAlbum(artista: Artista, id: string, form: NgForm){
        const values = form.value;
        const album = new newAlbum(values.name_album, values.year, values.awards);
        artista.album.push(album);
        return this.putArtista(artista, id);
    }

    putArtista(artista: Artista, id: string){
        return this.http.put<Artista>('http://localhost:3000/searchJson/' + id, artista)
    }

    postArtista(artista: Artista){
        return this.http.post<Artista>('http://localhost:3000/searchJson/', artista);
    }
}



//================================================================
//=========================classes================================
//================================================================
class newAlbum implements Album {
    name_album: string;
    year: string;
    awards: string;
    track_list: TrackList[];
    /**
     *
     */
    constructor(name_album, year, awards) {
        this.name_album = name_album;
        this.year = year;
        this.awards = awards;
        this.track_list = [];
    }
}