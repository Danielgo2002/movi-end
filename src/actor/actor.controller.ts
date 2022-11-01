import { Body, Controller, Post } from '@nestjs/common';
import { addActor } from 'src/dto/actor.dto/addActor.dto';
import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
    constructor(private actorService: ActorService) {}


    @Post('addActor')
    addActor(@Body()addActorDto: addActor){
        return this.actorService.AddActor(addActorDto)
    }


    @Post('deleteActor')
    deleteActor(){
        return this.actorService.deleteActor()
    }
}

