import { Injectable } from '@nestjs/common';
import { Movie, MovieFav } from './movie.model';
import { v4 as uuid } from 'uuid';
import { CreateMovieDto } from './dto/create-movie.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMovieById(id: string): Movie {
    return this.movies.find((movie) => movie.id === id);
  }

  createMovie(createMovieDto: CreateMovieDto): Movie {
    const { title, description } = createMovieDto;
    const movie: Movie = {
      id: uuid(),
      title,
      description,
      fav: MovieFav.NO,
    };
    this.movies.push(movie);
    return movie;
  }

  deleteMovieById(id: string): string {
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return 'Movie Deleted';
  }
}
