import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Movie } from 'src/schemas/movie-schema';
/**
 * @description this class AddActorDto define how the request body will look like(the parametert they shuld have)
 * (check the type and that they not empty)
 */

export class AddActorDto {
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
   * @description here we asking for an arry of movies thath the actor have(based on the connectin with the movie schema)
   */
  movies: Movie[];
}
