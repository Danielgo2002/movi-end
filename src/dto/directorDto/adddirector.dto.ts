import {  IsNotEmpty, IsNumber, IsString,  } from "class-validator";
import { Movie } from "src/schemas/movie-schema";
/**
 * @description 
 */

export class AddDirectorDto {

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;

  @IsNotEmpty()
  @IsNumber()
  birthDate: number;

  @IsNotEmpty()
  @IsString()
  gender: string;

  movies: Movie[]

}