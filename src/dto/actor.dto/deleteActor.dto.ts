import {  IsNotEmpty, IsString,  } from "class-validator";
/**
 * @description 
 */

export class deleteActorDto {

  @IsNotEmpty()
  @IsString()
  firstName: string;

  @IsNotEmpty()
  @IsString()
  lastName: string;


}