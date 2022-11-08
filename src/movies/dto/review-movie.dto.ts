import { IsNotEmpty } from 'class-validator';

export class ReviewMovieDto {
  @IsNotEmpty()
  review: string;
}
