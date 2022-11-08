import { IsNotEmpty, IsString } from 'class-validator';
/**
 * @description  this class deleteActorDto define the params in the body we want to get  when we use  the route
 * deleteActor
 */

export class deleteActorDto {
  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;
}
