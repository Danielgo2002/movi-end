import { Body, Controller, Post } from '@nestjs/common';
import { AddActorDto } from 'src/dto/actor.dto/addActor.dto';
import { deleteActorDto} from 'src/dto/actor.dto/deleteActor.dto';
import { ActorService } from './actor.service';

@Controller('actor')
export class ActorController {
    constructor(private actorService: ActorService) {}


    @Post('addActor')
    addActor(@Body() addActorDto: AddActorDto){
        return this.actorService.AddActor(addActorDto)
    }


    // @Post('deleteActor')
    // deleteActor(@Body() deleteActorDto: deleteActorDto){
    //     return this.actorService.deleteActor(deleteActorDto)
    // }
}

