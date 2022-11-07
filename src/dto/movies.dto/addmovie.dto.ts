import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { genre } from './movies.enum';
import { Director } from 'src/schemas/director-schema';
import { Movie } from 'src/schemas/movie-schema';
/**
 * @description
 */

export class addMovieDto {
  @IsNotEmpty()
  @IsString()
  name: string;

  @IsNotEmpty()
  @IsString()
  @IsEnum(genre)
  genre: genre;

  @IsNotEmpty()
  @IsNumber()
  publishDate: number;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  actors: string[];

  @IsNotEmpty()
  director: string;
}
