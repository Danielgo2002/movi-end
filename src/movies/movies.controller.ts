import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { addMovieDto } from 'src/dto/movies.dto/addmovie.dto';
import { DeleteMovieDto } from 'src/dto/movies.dto/deletemovie.dto';
import { Director } from 'src/schemas/director-schema';
import { MoviesService } from './movies.service';

@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
@Controller('movie')
export class MoviesController {
  constructor(private MovieService: MoviesService) {}

  @Post('addMovie')
  addMovie(@Body() addMovieDto: addMovieDto) {
    return this.MovieService.addMovie(addMovieDto);
  }

  @Post('deleteMovie')
  deleteMovie(@Body() deleteMovieDto: DeleteMovieDto) {
    return this.MovieService.deleteMovie(deleteMovieDto);
  }
}
