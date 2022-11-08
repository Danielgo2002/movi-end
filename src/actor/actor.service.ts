import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddActorDto } from 'src/dto/actor.dto/addActor.dto';
import { deleteActorDto } from 'src/dto/actor.dto/deleteActor.dto';
import { ActorDocument } from 'src/schemas/actor-schema';
import { Movie, MovieDocument } from 'src/schemas/movie-schema';
/**
 * @description this ActorService class inject inside the ActorModel,
 *  and MovieModel that let us work with the database
 */
@Injectable()
export class ActorService {
  constructor(
    @InjectModel('Actor') private readonly ActorModel: Model<ActorDocument>,
    @InjectModel('Movie') private readonly MovieModel: Model<MovieDocument>,
  ) {}

  /**
   * @description this function AddActor get params from the body req and create new actor user
   * @param addActorDto  the params we define we expext to get in the body req
   * @returns new actor user in the database based on the params in the addActorDto
   */
  async AddActor(addActorDto: AddActorDto) {
    const ActorMovie = new this.MovieModel();

    const user = new this.ActorModel(addActorDto);
    await user.save();
    return user;
  }
}
