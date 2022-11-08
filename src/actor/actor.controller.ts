import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddActorDto } from 'src/dto/actor.dto/addActor.dto';
import { ActorService } from './actor.service';

/**
 * @description this pipe "watch" the rutes requests and do the validation(*add in the main.ts file*)
 */
@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
/**
 * @description here we create the routes and call the actor.service thath hold the logic of the function
 * (uses the body req based on the actor.dto we made)
 */
@Controller('actor')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Post('addActor')
  addActor(@Body() addActorDto: AddActorDto) {
    return this.actorService.AddActor(addActorDto);
  }
}
