import {
  Body,
  Controller,
  Post,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AddActorDto } from 'src/dto/actor.dto/addActor.dto';
import { deleteActorDto } from 'src/dto/actor.dto/deleteActor.dto';
import { ActorService } from './actor.service';

@UsePipes(new ValidationPipe({ whitelist: true, forbidNonWhitelisted: true }))
@Controller('actor')
export class ActorController {
  constructor(private actorService: ActorService) {}

  @Post('addActor')
  addActor(@Body() addActorDto: AddActorDto) {
    return this.actorService.AddActor(addActorDto);
  }
}
