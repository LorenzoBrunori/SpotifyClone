import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AlbumsComponent } from "./Home/albums/albums.component";


import { HomeComponent } from "./home/home.component";
import { SearchComponent } from "./search/search.component";

const appRoutes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'albums/:id', component: AlbumsComponent },
    { path: 'search', component: SearchComponent },

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