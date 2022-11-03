import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Actor, ActorDocument } from './actor-schema'
import { DirectorDocument } from './director-schema';

/**
 * @description This Document define the users and allow to perform queries on the data-base
 */
export type MovieDocument = Movie & Document;

/**
 * @description 
 */
@Schema()
export class Movie {

  @Prop({required: true})
  name: string

  @Prop({required: true})
  genre: string

  @Prop({required: true,})
  publishDate: number

  @Prop()
  time: string

  @Prop( {type: mongoose.Schema.Types.ObjectId, ref: 'Director' })
  director: DirectorDocument


  @Prop({ type: [{type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }]})
  actors: ActorDocument[];

}

export const MovieSchema = SchemaFactory.createForClass(Movie);