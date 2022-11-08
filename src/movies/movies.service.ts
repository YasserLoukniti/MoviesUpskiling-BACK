import { Injectable, NotFoundException } from '@nestjs/common';
import { Movie, MovieFav } from './movie.model';
import { v4 as uuid } from 'uuid';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';

@Injectable()
export class MoviesService {
  private movies: Movie[] = [];

  getAllMovies(): Movie[] {
    return this.movies;
  }

  getMoviesByFilter(filterDto: GetMoviesFilterDto): Movie[] {
    const { search, category } = filterDto;
    let movies = this.getAllMovies();
    if (category) {
      movies = movies.filter((movie) => movie.category === category);
    }
    if (search) {
      movies = movies.filter((movie) => {
        if (movie.title.includes(search) || movie.description.includes(search))
          return true;
        return false;
      });
    }
    return movies;
  }

  getMovieById(id: string): Movie {
    const found = this.movies.find((movie) => movie.id === id);
    if (!found) {
      throw new NotFoundException('Movie Not Found');
    }

    return found;
  }
  addReviewMovie(id: string, review: string) {
    const movie = this.getMovieById(id);
    movie.review = review;
    return movie;
  }

  createMovie(createMovieDto: CreateMovieDto): Movie {
    const { title, description, category } = createMovieDto;
    const movie: Movie = {
      id: uuid(),
      title,
      description,
      category,
      fav: MovieFav.NO,
    };
    this.movies.push(movie);
    return movie;
  }

  deleteMovieById(id: string): string {
    const found = this.getMovieById(id);
    this.movies = this.movies.filter((movie) => movie.id !== id);
    return 'Movie Deleted';
  }
}
