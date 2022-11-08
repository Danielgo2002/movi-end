import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { Actor, ActorDocument } from './actor-schema';
import { DirectorDocument } from './director-schema';

/**
 * @description This Document define the movies and allow to perform queries on the data-base
 */
export type MovieDocument = Movie & Document;

/**
 * @description we create this schema to define how we want the movie object will fit in the database
 */
@Schema()
export class Movie {
  @Prop({ required: true })
  name: string;

  @Prop({ required: true })
  genre: string;

  @Prop({ required: true })
  publishDate: number;

  @Prop()
  time: string;

  /**
   * @description here we make the bond between the movieSchema and directorSchema. the movie object will have params.
   * on of them is director that contain the director id
   */
  @Prop({ type: mongoose.Schema.Types.ObjectId, ref: 'Director' })
  director: DirectorDocument;

  /**
   * @description here we make the bond between the movieSchema and actorSchema(evry actor has movies he playd in ).
   * the movie object will have params one of them will be an arry of movies(id)
   */
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Actor' }] })
  actors: ActorDocument[];
}

export const MovieSchema = SchemaFactory.createForClass(Movie);
