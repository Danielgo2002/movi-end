import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { addMovieDto } from 'src/dto/movies.dto/addmovie.dto';
import { DeleteMovieDto } from 'src/dto/movies.dto/deletemovie.dto';
import { MoviesService } from './movies.service';

/**
 * @description this pipe "watch" the routes requests and do the validation(*added in the main.ts file*)
 */
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
/**
 * @description this class contain the routes. they gat params from the req.body(based on the addMovieDto
 * for adding and deleteMovieDto for deleteing).also call the service that contain inside the logic of the
 * functions
 */
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
