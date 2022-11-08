import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { MovieDocument } from './movie-schema';

/**
 * @description This Document define the Actors and allow to perform queries on the data-base
 */
export type ActorDocument = Actor & Document;

/**
 * @description we create schemas to define how we want the "Actors" will fit inside the datsbase
 */

@Schema()
export class Actor {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  birthDate: number;

  @Prop({ required: true })
  gender: string;

  /**
   * @description here we make one to many bond between tow schemas.
   * in the databsase the Actor will have parameters on of them will be an arry of movies based on the movie schema
   */
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }] })
  movies: MovieDocument[];
}

export const ActorSchema = SchemaFactory.createForClass(Actor);
