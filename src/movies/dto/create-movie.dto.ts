import { IsNotEmpty } from 'class-validator';

export class CreateMovieDto {
  @IsNotEmpty()
  title: string;
  @IsNotEmpty()
  description: string;
  category: string;
}
