import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddDirectorDto } from 'src/dto/directorDto/adddirector.dto';
import { addMovieDto } from 'src/dto/movies.dto/addmovie.dto';
import { DeleteMovieDto } from 'src/dto/movies.dto/deletemovie.dto';
import { ActorDocument } from 'src/schemas/actor-schema';
import { Director, DirectorDocument } from 'src/schemas/director-schema';
import { Movie, MovieDocument } from 'src/schemas/movie-schema';
import { MoviesModule } from './movies.module';

@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<MovieDocument>,
    @InjectModel('Director')
    private readonly directorModel: Model<DirectorDocument>,
    @InjectModel('Actor') private readonly actorModel: Model<ActorDocument>,
  ) {}

  async addMovie(addMovieDto: addMovieDto) {
    try {
      const exsistMovie = await this.movieModel.findOne({
        name: addMovieDto.name,
      });
      if (exsistMovie) {
        return 'duplicate error. this Movie alredy exsist';
      }
      const movie = new this.movieModel(addMovieDto);
      await movie.save();

      const director = await this.directorModel.findById(movie.director);
      director.movies.push(movie._id);

      await director.save();

      for await (const actor of movie.actors) {
        const result = await this.actorModel.findById(actor);
        result.movies.push(movie._id);
        await result.save();
      }
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
  async deleteMovie(deleteMovieDto: DeleteMovieDto) {
    try {
      const movie = await this.movieModel.findById(deleteMovieDto.id);
      if (!movie) {
        return 'movie not exsist';
      }

      const director = await this.directorModel.findById(movie.director);
      if (!director) {
        return 'director not exsist';
      }

      director.movies = director.movies.filter(function (movie) {
        return movie._id.toString() !== deleteMovieDto.id;
      });
      await director.save();

      for await (const actor of movie.actors) {
        const result = await this.actorModel.findById(actor);
        result.movies = result.movies.filter(function (movie) {
          return movie._id.toString() !== deleteMovieDto.id;
        });
        await result.save();
      }

      await this.movieModel.findByIdAndDelete(deleteMovieDto.id);
      return movie;
    } catch (error) {
      console.log(error);
    }
  }
}
