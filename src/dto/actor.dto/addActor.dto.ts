import {  IsNotEmpty, IsNumber, IsString,  } from "class-validator";
import { Movie } from "src/schemas/movie-schema";
/**
 * @description 
 */

export class addActor {

  @IsNotEmpty()
  @IsString()
  first_name: string;

  @IsNotEmpty()
  @IsString()
  last_name: string;

  @IsNotEmpty()
  @IsNumber()
  birth_date: number;

  @IsNotEmpty()
  @IsString()
  gender: string;

  Movie: Movie[]

}