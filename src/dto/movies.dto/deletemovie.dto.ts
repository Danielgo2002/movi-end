import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { Actor } from 'src/schemas/actor-schema';
import { Director } from 'src/schemas/director-schema';
import { Movie } from 'src/schemas/movie-schema';
/**
 * @description
 */

export class DeleteMovieDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
