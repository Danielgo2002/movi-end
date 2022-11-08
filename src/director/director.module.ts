import { Module } from '@nestjs/common';
import { DirectorService } from './director.service';
import { DirectorController } from './director.controller';
import { MongooseModule } from '@nestjs/mongoose';
import { Director, DirectorSchema } from 'src/schemas/director-schema';
import { Movie, MovieSchema } from 'src/schemas/movie-schema';

/**
 * @description this directorModule file imports the schemas of Director and Movie to be able to work with them(the directorModule
 * has work with the Director and Movie schema)
 * also directorModule make connection with the DirectorController that in charge on the api routes and the
 * DirectorService  thath in charge on the api logic and functions
 */
@Module({
  imports: [
    MongooseModule.forFeature([
      { name: Director.name, schema: DirectorSchema },
    ]),
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  providers: [DirectorService],
  controllers: [DirectorController],
})
export class DirectorModule {}
