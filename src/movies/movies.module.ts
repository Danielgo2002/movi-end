import {  Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Director, DirectorSchema } from 'src/schemas/director-schema';
import { Movie, MovieSchema } from 'src/schemas/movie-schema';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),MongooseModule.forFeature([{ name: Director.name, schema: DirectorSchema }])],
    controllers: [MoviesController],
    providers: [MoviesService]
})
export class MoviesModule {}
