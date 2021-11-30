    interface TrackList {
        name_track: string;
        time: string;
    }

    interface Album {
        name_album: string;
        year: string;
        awards: string;
        track_list: TrackList[];
    }

    export interface Artista {
        id: number;
        genre: string;
        name: string;
        imagePath: string;
        bio: string;
        is_band: boolean;
        album: Album[];
    }