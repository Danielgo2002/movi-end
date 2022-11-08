import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Movie } from 'src/schemas/movie-schema';
/**
 * @description this class AddDirectorDto define how we want to  get the params in the route request addDirector
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

  /**
   * @description param movies that contain an arry of movies.id(based on the connection in director schema
   * with movie schema)
   */
  movies: Movie[];
}
