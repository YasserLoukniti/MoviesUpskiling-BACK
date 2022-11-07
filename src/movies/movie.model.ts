export interface Movie {
  id: string;
  title: string;
  description: string;
  category: string;
  fav: MovieFav;
}

export enum MovieFav {
  YES = 'YES',
  NO = 'NO',
}
