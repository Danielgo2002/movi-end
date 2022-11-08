import { IsEnum, IsNotEmpty, IsNumber, IsString } from 'class-validator';
import { genre } from './movies.enum';
import { Director } from 'src/schemas/director-schema';
import { Movie } from 'src/schemas/movie-schema';
/**
 * @description this class define the body of the addMovie request we expect to get
 */

export class addMovieDto {
  @IsNotEmpty()
  @IsString()
  name: string;
  /**
   * @description here we check that the genre param is enum(the params is the params we allowd,in the enum file)
   */
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
  /**
   * @description here we define thath the params will be actors array thath contain actor.id(based on the connection
   * with actorSchema and  also directorSchema the director that contain the director.id )
   */
  @IsNotEmpty()
  actors: string[];

  @IsNotEmpty()
  director: string;
}
