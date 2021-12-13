import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { EditComponent } from "./edit/edit.component";
import { AlbumsComponent } from "./Home/albums/albums.component";


import { HomeComponent } from "./home/home.component";
import { InsertAlbumComponent } from "./insert/insert-album/insert-album.component";
import { InsertTracksComponent } from "./insert/insert-tracks/insert-tracks.component";
import { InsertComponent } from "./insert/insert.component";
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'albums/:id', component: AlbumsComponent},
    { path: 'search', component: SearchComponent },
    { path: 'insert', component: InsertComponent},
    { path: 'insert/album', component: InsertAlbumComponent},
    { path: 'insert/album/tracks', component: InsertTracksComponent},
    { path: 'edit', component: EditComponent},


    { path: '**', component: HomeComponent}

];

@NgModule({
    imports: [
        // RouterModule.forRoot(appRoutes, {useHash: true})
        RouterModule.forRoot(appRoutes)
    ],
    exports: [RouterModule]
})

export class AppRoutingModule {

}