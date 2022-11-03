import { Body, Controller, Post } from '@nestjs/common';
import { addMovieDto } from 'src/dto/movies.dto/addmovie.dto';
import { Director } from 'src/schemas/director-schema';
import { MoviesService } from './movies.service';

@Controller('movie')
export class MoviesController {
    constructor(private MovieService: MoviesService) {}

    @Post('addMovie')
    addMovie(@Body() addMovieDto: addMovieDto){
        return this.MovieService.addMovie(addMovieDto)
    }
}
