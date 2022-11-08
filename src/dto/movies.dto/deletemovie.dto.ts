import { IsNotEmpty, IsNumber, IsString } from 'class-validator';
/**
 * @description this class DeleteMovieDto drfine the body req for the deleteMovie request
 */

export class DeleteMovieDto {
  @IsNotEmpty()
  @IsString()
  id: string;
}
