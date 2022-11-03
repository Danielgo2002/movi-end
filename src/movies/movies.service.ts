import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddDirectorDto } from 'src/dto/directorDto/adddirector.dto';
import { addMovieDto } from 'src/dto/movies.dto/addmovie.dto';
import { ActorDocument } from 'src/schemas/actor-schema';
import { DirectorDocument } from 'src/schemas/director-schema';
import { MovieDocument } from 'src/schemas/movie-schema';
import { MoviesModule } from './movies.module';

@Injectable()
export class MoviesService {
    constructor(@InjectModel('Movie')private readonly movieModel:Model <MovieDocument>,@InjectModel('Director')private readonly directorModel:Model<DirectorDocument>,@InjectModel('Director')private readonly actorModel:Model<ActorDocument>){}

    async addMovie(addMovieDto:addMovieDto){
        try{
            const exsistMovie = await this.movieModel.findOne({name:addMovieDto.name})
            if(exsistMovie){
                return 'duplicate error. this Movie alredy exsist'
            }            
            const movie = new this.movieModel(addMovieDto)
                await movie.save()    
            //direc

            const director = await this.directorModel.findById(movie.director)
            director.movies.push(movie._id)
            
            await director.save()
       
            //actors
            const actor = await this.actorModel.findById(movie.actors)
            // for await(actor.movies.push(movie._id))









                return movie
        }







        catch (error){
            console.log(error);
            
        }

    }

}
