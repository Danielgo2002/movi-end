import { Controller, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Actor, ActorSchema } from 'src/schemas/actor-schema';
import { Director, DirectorSchema } from 'src/schemas/director-schema';
import { Movie, MovieSchema } from 'src/schemas/movie-schema';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }]),MongooseModule.forFeature([{ name: Movie.name, schema: MovieSchema }])],
    controllers: [ActorController],
    providers: [ActorService],
})
export class ActorModule {}
