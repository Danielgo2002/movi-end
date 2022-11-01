import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { MovieDocument } from 'src/schemas/movie-schema';
import { MoviesModule } from './movies.module';

@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie')private readonly movieModel:Model <MovieDocument>){}

}
