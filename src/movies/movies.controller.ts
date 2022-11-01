import { Controller, Post } from '@nestjs/common';
import { MoviesService } from './movies.service';

@Controller('movies')
export class MoviesController {
    constructor(private MovieService: MoviesService) {}

    @Post()
    addMovie(){}
}
