import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { addMovieDto } from 'src/dto/movies.dto/addmovie.dto';
import { DeleteMovieDto } from 'src/dto/movies.dto/deletemovie.dto';
import { ActorDocument } from 'src/schemas/actor-schema';
import { DirectorDocument } from 'src/schemas/director-schema';
import { MovieDocument } from 'src/schemas/movie-schema';

/**
 * @description this MoviesService class inject the movieModel,directorModel,actorModel thath let us work
 * with database also it contain functions inside
 */
@Injectable()
export class MoviesService {
  constructor(
    @InjectModel('Movie') private readonly movieModel: Model<MovieDocument>,
    @InjectModel('Director')
    private readonly directorModel: Model<DirectorDocument>,
    @InjectModel('Actor') private readonly actorModel: Model<ActorDocument>,
  ) {}
  /**
   * @description this addMovie get params from the req body(addMovieDto) and create new movie in the database
   * contain the array of actors and director
   * @param addMovieDto the body params that the function get based on the(addMovieDto)we created
   * @returns return new movie in the database with the params we define(addMovieDto and arry of user.id
   * and director.id)
   */
  async addMovie(addMovieDto: addMovieDto) {
    try {
      /**
       * here we check if there is alredy a movie in the database with the same name of the body req(addMovieDto)
       * if exsist it throws error
       */
      const exsistMovie = await this.movieModel.findOne({
        name: addMovieDto.name,
      });
      if (exsistMovie) {
        return 'duplicate error. this Movie alredy exsist';
      }
      /**
       * here we create new movie into the database based on the params we expect(addMovieDto)
       */
      const movie = new this.movieModel(addMovieDto);
      await movie.save();

      /**
       * here we itarete in the director database and find director based on the id of the director
       *  we provided in the body req. after we find the director the function gose to director movies array
       * and push the movie id to his array. then save the director.
       */
      const director = await this.directorModel.findById(movie.director);
      director.movies.push(movie._id);

      await director.save();

      /**
       * @description here we use for lopp becuse we have an arry of actors in the body and for each we
       *  need to push the movie id ..  we itaret for each actor in the array of movie.actor and define averiable
       * to an actor we find in the databse based on his id that provide in the body req(.actorModel.findById(actor))
       * then gose to the actor array of movies and push the movie.id inside
       */
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
  /**
   *
   * @param deleteMovieDto
   * @returns
   */
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
