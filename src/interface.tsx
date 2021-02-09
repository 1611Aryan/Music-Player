export interface library {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  setCurrentSong: React.Dispatch<
    React.SetStateAction<{
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: string[];
      id: any;
      active: boolean;
    }>
  >;
  songs: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  }[];
  isPlaying: boolean;
  setSongs: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        cover: string;
        artist: string;
        audio: string;
        color: string[];
        id: any;
        active: boolean;
      }[]
    >
  >;
  libraryStatus: boolean;
  setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  newSongs: (
    offset: number,
    setSongs: React.Dispatch<
      React.SetStateAction<
        {
          name: string;
          cover: string;
          artist: string;
          audio: string;
          color: string[];
          id: any;
          active: boolean;
        }[]
      >
    >
  ) => void;
  trackRef: React.MutableRefObject<HTMLDivElement | null>;
}

export interface librarySong {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  setCurrentSong: React.Dispatch<
    React.SetStateAction<{
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: string[];
      id: any;
      active: boolean;
    }>
  >;
  songs: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  }[];
  isPlaying: boolean;
  setSongs: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        cover: string;
        artist: string;
        audio: string;
        color: string[];
        id: any;
        active: boolean;
      }[]
    >
  >;
  setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
  song: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  };
  trackRef: React.MutableRefObject<HTMLDivElement | null>;
}

export interface moreSongs {
  offset: number;
  setOffset: React.Dispatch<React.SetStateAction<number>>;
  newSongs: (
    offset: number,
    setSongs: React.Dispatch<
      React.SetStateAction<
        {
          name: string;
          cover: string;
          artist: string;
          audio: string;
          color: string[];
          id: any;
          active: boolean;
        }[]
      >
    >
  ) => void;
  setSongs: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        cover: string;
        artist: string;
        audio: string;
        color: string[];
        id: any;
        active: boolean;
      }[]
    >
  >;
}

export interface music {
  currentSong: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  };
  isPlaying: boolean;
}

export interface nav {
  libraryStatus: boolean;
  setLibraryStatus: React.Dispatch<React.SetStateAction<boolean>>;
}

export interface player {
  audioRef: React.MutableRefObject<HTMLAudioElement | null>;
  currentSong: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  };
  setCurrentSong: React.Dispatch<
    React.SetStateAction<{
      name: string;
      cover: string;
      artist: string;
      audio: string;
      color: string[];
      id: any;
      active: boolean;
    }>
  >;
  songs: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  }[];
  isPlaying: boolean;
  setIsPlaying: React.Dispatch<React.SetStateAction<boolean>>;
  setSongs: React.Dispatch<
    React.SetStateAction<
      {
        name: string;
        cover: string;
        artist: string;
        audio: string;
        color: string[];
        id: any;
        active: boolean;
      }[]
    >
  >;
  trackRef: React.MutableRefObject<HTMLDivElement | null>;
}

export interface playerbg {
  currentSong: {
    name: string;
    cover: string;
    artist: string;
    audio: string;
    color: string[];
    id: any;
    active: boolean;
  };
}
