import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActorModule } from './actor/actor.module';
import { MoviesController } from './movies/movies.controller';
import { MoviesService } from './movies/movies.service';
import { MoviesModule } from './movies/movies.module';
import { DirectorModule } from './director/director.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/moviEnd'), ActorModule, MoviesModule, DirectorModule],
  
})
export class AppModule {}
