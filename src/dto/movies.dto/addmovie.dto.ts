import {  IsNotEmpty, IsNumber, IsString,  } from "class-validator";
import { Actor } from "src/schemas/actor-schema";
import { Movie } from "src/schemas/movie-schema";
/**
 * @description 
 */

export class addMovieDto {

  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  genre: string;

  @IsNotEmpty()
  @IsNumber()
  publishDate: number;

  @IsNotEmpty()
  @IsNumber()
  time: string;

  Actor: Actor[]

}