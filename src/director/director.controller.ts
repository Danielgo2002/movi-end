import { Body, Controller, Post } from '@nestjs/common';
import { AddDirectorDto } from 'src/dto/directorDto/adddirector.dto';
import { DirectorService } from './director.service';

@Controller('director')
export class DirectorController {
    constructor(private directorservice: DirectorService) {}

    @Post('addDirector')
    addDirector(@Body() addDirectorDto: AddDirectorDto){
        return this.directorservice.addDirector(addDirectorDto)
    }

}
