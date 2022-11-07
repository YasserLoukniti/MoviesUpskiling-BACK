export interface Movie {
  id: string;
  title: string;
  description: string;
  fav: MovieFav;
}

export enum MovieFav {
  YES = 'YES',
  NO = 'NO',
}
