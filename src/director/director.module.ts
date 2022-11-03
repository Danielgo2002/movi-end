import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Director, DirectorSchema } from 'src/schemas/director-schema';
import { ActorModule } from 'src/actor/actor.module';
import { MoviesModule } from 'src/movies/movies.module';
import { Movie, MovieSchema } from 'src/schemas/movie-schema';

@Module({
  imports:[MongooseModule.forFeature([{ name: Director.name, schema: DirectorSchema }]),MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
  providers: [DirectorService],
  controllers: [DirectorController]
})
export class DirectorModule {}
