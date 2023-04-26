import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import * as bcrypt from 'bcrypt';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(@InjectRepository(UserEntity) private userRepository : Repository<UserEntity>) {

  }

  async getUsers() : Promise<UserEntity[]> {
    return await this.userRepository.find();
  }

  async findOne(username : string) : Promise<UserEntity | undefined> {
    let users = await this.userRepository.find(
      {relations:{restaurant:true, rang:true}, where : [{"email" : username}]}
    )
    if (username.length == 1) {
      return users[0];
    } else {
      return undefined;
    }
  }

  async getUser(_id : number) : Promise<UserEntity[]> {
    return await this.userRepository.find({
        relations : {restaurant : true, rang : true},
        where : [{"id" : _id}]
    });
  }

  async createUser(user : UserEntity) {
    if ( user.password ) {
      const password = user.password;
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      user.password = hash;
    }
    return await this.userRepository.save(user);
  }

  async updateUser(user : UserEntity) {
    if (user.password) {
      const password = user.password
      const saltOrRounds = 10;
      const hash = await bcrypt.hash(password, saltOrRounds);
      user.password = hash;
    }
    return await this.userRepository.save(user);
  }

  deleteUser(user : UserEntity){
    return this.userRepository.delete(user);
  }

  async saveOrUpdateRefreshToken(id : string, refreshToken : string, refreshTokenExpires) {
    await this.userRepository.update(id, {refreshToken : refreshToken, refreshTokenExpires : refreshTokenExpires});
  }


  // create(createUserDto: CreateUserDto) {
  //   return 'This action adds a new user';
  // }

  // findAll() {
  //   return `This action returns all user`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} user`;
  // }

  // update(id: number, updateUserDto: UpdateUserDto) {
  //   return `This action updates a #${id} user`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} user`;
  // }
}
