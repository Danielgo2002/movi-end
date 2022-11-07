import {  Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Actor, ActorSchema } from 'src/schemas/actor-schema';
import { Director, DirectorSchema } from 'src/schemas/director-schema';
import { Movie, MovieSchema } from 'src/schemas/movie-schema';
import { MoviesController } from './movies.controller';
import { MoviesService } from './movies.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),MongooseModule.forFeature([{ name: Director.name, schema: DirectorSchema }]),MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }])],
    controllers: [MoviesController],
    providers: [MoviesService]
})
export class MoviesModule {}
