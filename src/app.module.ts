import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { ActorModule } from './actor/actor.module';
import { MoviesModule } from './movies/movies.module';
import { DirectorModule } from './director/director.module';

/**
 * @description this appModule file is the mainModule file in the app. this file make the base connection to the
 * mongodb DataBase., also the appModule imports the ActorModule,MoviesModule,DirectorModule that they filed the
 * logic ,function and schemas into one file.
 */
@Module({
  imports: [
    MongooseModule.forRoot('mongodb://localhost/moviEnd'),
    ActorModule,
    MoviesModule,
    DirectorModule,
  ],
})
export class AppModule {}
