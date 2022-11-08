export interface Movie {
  id: string;
  title: string;
  description: string;
  category: string;
  fav: MovieFav;
  review?: string;
}

export enum MovieFav {
  YES = 'YES',
  NO = 'NO',
}
