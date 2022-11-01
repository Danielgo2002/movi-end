import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { addActor } from 'src/dto/actor.dto/addActor.dto';
import { ActorDocument } from 'src/schemas/actor-schema';

@Injectable()
export class ActorService {
    constructor(@InjectModel('Actor')private readonly ActorModel:Model <ActorDocument>){}

    async AddActor(addActorDto:addActor){
        const user = new this.ActorModel(addActor)
          await user.save()
    }

    async deleteActor(){}
}
