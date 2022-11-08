import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import { AddDirectorDto } from 'src/dto/directorDto/adddirector.dto';
import { DirectorDocument } from 'src/schemas/director-schema';
import { MovieDocument } from 'src/schemas/movie-schema';

/**
 * @description this DirectorService class inject the DirectorModel and MovieModel
 * . also contain the addDirector function
 */
@Injectable()
export class DirectorService {
  constructor(
    @InjectModel('Director')
    private readonly DirectorModel: Model<DirectorDocument>,
    @InjectModel('Movie') private readonly MovieModel: Model<MovieDocument>,
  ) {}

  /**
   * @description this function get param in the body req based on the AddDirectorDto
   *  and save new director user in database
   * @param AddDirectorDto the params we define we expect get in the body req
   * @returns new actor user in the database based on the AddDirectorDto in the body
   */
  async addDirector(AddDirectorDto: AddDirectorDto) {
    const DirectorMovie = new this.DirectorModel();

    const user = new this.DirectorModel(AddDirectorDto);
    await user.save();

    return user;
  }
}
