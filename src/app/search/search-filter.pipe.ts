import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchFilter'
})
export class SearchFilterPipe implements PipeTransform {

  // transform(list: any[], filterText: string): any {
  //   return list ? list.filter(item => 
  //     item.name.search(new RegExp(filterText, 'i')) > -1) : [];
  // }

  transform (artisti: any[], filterText: string): any {
    let artistiResult: any[] = [];

    artisti.forEach(artista => {
      let str = '';
      str += artista.name;
      artista.album.forEach(album => {
        str += ' ' + album.name_album;
        album.track_list.forEach(track => {
          str += ' ' + track.name_track;
        }); 
      });
      if(str.toLowerCase().includes(filterText)){
          artistiResult.push(artista);
        }
    });
    return artistiResult;
  }
}
