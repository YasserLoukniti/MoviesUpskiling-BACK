import { Body, Controller, Delete, Get, Param, Post } from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAllMovies(): Movie[] {
    return this.moviesService.getAllMovies();
  }

  @Get('/:id')
  getMovieById(@Param('id') id: string): Movie {
    return this.moviesService.getMovieById(id);
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.createMovie(createMovieDto);
  }

  @Delete('/:id')
  deleteMovieById(@Param('id') id: string): string {
    return this.moviesService.deleteMovieById(id);
  }
}
