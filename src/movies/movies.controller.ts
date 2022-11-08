import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Query,
} from '@nestjs/common';
import { CreateMovieDto } from './dto/create-movie.dto';
import { GetMoviesFilterDto } from './dto/get-movies-filter.dto';
import { ReviewMovieDto } from './dto/review-movie.dto';
import { Movie } from './movie.model';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
  constructor(private moviesService: MoviesService) {}

  @Get()
  getAllMovies(@Query() filterDto: GetMoviesFilterDto): Movie[] {
    if (Object.keys(filterDto).length) {
      return this.moviesService.getMoviesByFilter(filterDto);
    } else return this.moviesService.getAllMovies();
  }

  @Get('/:id')
  getMovieById(@Param('id') id: string): Movie {
    return this.moviesService.getMovieById(id);
  }

  @Post()
  createMovie(@Body() createMovieDto: CreateMovieDto) {
    return this.moviesService.createMovie(createMovieDto);
  }

  @Patch('/:id/review')
  addReviewMovie(
    @Param('id') id: string,
    @Body() reviewMovieDto: ReviewMovieDto,
  ) {
    return this.moviesService.addReviewMovie(id, reviewMovieDto.review);
  }

  @Delete('/:id')
  deleteMovieById(@Param('id') id: string): string {
    return this.moviesService.deleteMovieById(id);
  }
}
