import { Prop, Schema, SchemaFactory } from '@nestjs/mongoose';
import mongoose, { Document } from 'mongoose';
import { MovieDocument } from './movie-schema';

/**
 * @description This Document define the Directors and allow to perform queries on the data-base
 */
export type DirectorDocument = Director & Document;

/**
 * @description we create this schema to define how we want the Director will fit in the database(wich params he wiil have)
 *
 */

@Schema()
export class Director {
  @Prop({ required: true })
  firstName: string;

  @Prop({ required: true })
  lastName: string;

  @Prop({ required: true })
  birthDate: number;

  @Prop({ required: true })
  gender: string;

  /**
   * @description here we make one to many bond between the directorSchema and movieSchema .
   * in databse the on of the director prameters will be an arry of Movies
   */
  @Prop({ type: [{ type: mongoose.Schema.Types.ObjectId, ref: 'Movie' }] })
  movies: MovieDocument[];
}

export const DirectorSchema = SchemaFactory.createForClass(Director);
