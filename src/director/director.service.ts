import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddDirectorDto } from 'src/dto/directorDto/adddirector.dto';
import { DirectorDocument } from 'src/schemas/director-schema';
import { MovieDocument } from 'src/schemas/movie-schema';

@Injectable()
export class DirectorService {
    constructor(@InjectModel('Director')private readonly DirectorModel:Model <DirectorDocument>, @InjectModel('Movie')private readonly MovieModel: Model<MovieDocument>){}

    async addDirector(AddDirectorDto:AddDirectorDto){
        const DirectorMovie = new this.DirectorModel()

        const user =  new this.DirectorModel(AddDirectorDto)   
          await user.save() 

        //   const directorMovies = new this.DirectorModel(AddDirectorDto)
        //   directorMovies.movies = DirectorMovie.id
        //   user.movies.push(directorMovies.id)
           


          
          
          return user

    }


}
