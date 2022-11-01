import { Controller, Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { Actor, ActorSchema } from 'src/schemas/actor-schema';
import { ActorController } from './actor.controller';
import { ActorService } from './actor.service';

@Module({
    imports:[MongooseModule.forFeature([{ name: Actor.name, schema: ActorSchema }])],
    controllers: [ActorController],
    providers: [ActorService],
})
export class ActorModule {}
