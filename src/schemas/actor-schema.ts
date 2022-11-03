import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { MovieDocument } from './movie-schema';

/**
 * @description This Document define the users and allow to perform queries on the data-base
 */
export type ActorDocument = Actor & Document;

/**
 * @description 
 */

@Schema()
export class Actor {

  @Prop({required: true})
  firstName: string

  @Prop({required: true})
  lastName: string

  @Prop({required: true})
  birthDate : number

  @Prop({required: true})
  gender: string


  @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }]})
  movies: MovieDocument[];

}

export const ActorSchema = SchemaFactory.createForClass(Actor);