declare module Artista {

    export interface TrackList {
        name_track: string;
        time: string;
    }

    export interface Album {
        name_album: string;
        year: string;
        awards: string;
        track_list: TrackList[];
    }

    export interface RootObject {
        id: number;
        genre: string;
        name: string;
        imagePath: string;
        bio: string;
        is_band: boolean;
        album: Album[];
    }

}