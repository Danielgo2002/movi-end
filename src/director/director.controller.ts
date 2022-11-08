import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddDirectorDto } from 'src/dto/directorDto/adddirector.dto';
import { DirectorService } from './director.service';
/**
 * @description this pipe "watch" the routes requests and do the validation(*added in the main.ts filen*)
 */
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
/**
 * @descriptio this colnroller create the routes(get the body from the request based on the director.dto).
 * calls the directorService thath hold the logic of the route functions
 *
 */
@Controller('director')
export class DirectorController {
  constructor(private directorservice: DirectorService) {}

  @Post('addDirector')
  addDirector(@Body() addDirectorDto: AddDirectorDto) {
    return this.directorservice.addDirector(addDirectorDto);
  }
}
