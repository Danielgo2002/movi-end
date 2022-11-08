import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Actor, ActorSchema } from 'src/schemas/actor-schema';
import { Movie, MovieSchema } from 'src/schemas/movie-schema';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';

/**
 * @description this file actorModule contain iside the imoports to the Actor schema and the Movie schema to be able to use them
 * also import the ActorController file that in charge on the api routes and the ActorService file that in charge
 * on logic of the api(all the functions)
 */
@Module({
  imports: [
    MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }]),
    MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }]),
  ],
  controllers: [ActorController],
  providers: [ActorService],
})
export class ActorModule {}
