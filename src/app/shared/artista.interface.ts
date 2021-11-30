export interface Artista {
    id: number;
    genre: string;
    name: string;
    imagePath: string;
    bio: string;
    is_band: boolean;
    Album : Album[];
    
}

export interface Album {
    name_album: string;
    year: string;
    awards: string;
    trackList: TrackList[]
}

export interface TrackList {
    name_track: string;
    time: string;
}