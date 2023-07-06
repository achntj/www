export type Song = {
  songUrl: string;
  imageUrl: string;
  artist: string;
  title: string;
};

export type NowPlayingSong = {
  album: string;
  albumImageUrl: string;
  artist: string;
  isPlaying: boolean;
  songUrl: string;
  title: string;
};

export type LastPlayedSong = {
  albumImageUrl: string;
  artist: string;
  songUrl: string;
  title: string;
};

export type TopTracks = {
  tracks: Song[];
};

