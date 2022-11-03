import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddActorDto } from 'src/dto/actor.dto/addActor.dto';
import { deleteActorDto } from 'src/dto/actor.dto/deleteActor.dto';
import { ActorDocument } from 'src/schemas/actor-schema';
import { Movie, MovieDocument } from 'src/schemas/movie-schema';

@Injectable()
export class ActorService {
    constructor(@InjectModel('Actor')private readonly ActorModel:Model <ActorDocument>, @InjectModel('Movie')private readonly MovieModel: Model<MovieDocument>){}

    async AddActor(addActorDto: AddActorDto){

        const ActorMovie = new this.MovieModel()

        const user =  new this.ActorModel(addActorDto)   
          await user.save() 
          return user

            
    }

        



    

    // async deleteActor(deleteActorDto: deleteActorDto){
    //     const user = new this.ActorModel(deleteActorDto)
    //     const pop = await user.populate('movies')
    //     for await(const actor of ()){
    //         actor.delete()
    //     }
        
    // }
}
