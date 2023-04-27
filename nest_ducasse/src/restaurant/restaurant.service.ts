import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { RestaurantEntity } from './entities/restaurant.entity';
import { Repository } from 'typeorm';

@Injectable()
export class RestaurantService {
  constructor(@InjectRepository(RestaurantEntity) private restaurantRepository : Repository<RestaurantEntity>) {
  
  }

  async getRestaurants() : Promise<RestaurantEntity[]> {
    return await this.restaurantRepository.find();
  }

  async getRestaurant(_id : number) : Promise<RestaurantEntity[]> {
    return await this.restaurantRepository.find({
      where : [{"id" : _id}]
    });
  }

  async createRestaurant(restaurant : RestaurantEntity) {
    return await this.restaurantRepository.save(restaurant);
  }

  async updateRestaurant(restaurant : RestaurantEntity) {
    this.restaurantRepository.save(restaurant);
  }

  async deleteRestaurant(restaurant : RestaurantEntity) {
    this.restaurantRepository.delete(restaurant);
  }

  // create(createRestaurantDto: CreateRestaurantDto) {
  //   return 'This action adds a new restaurant';
  // }

  // findAll() {
  //   return `This action returns all restaurant`;
  // }

  // findOne(id: number) {
  //   return `This action returns a #${id} restaurant`;
  // }

  // update(id: number, updateRestaurantDto: UpdateRestaurantDto) {
  //   return `This action updates a #${id} restaurant`;
  // }

  // remove(id: number) {
  //   return `This action removes a #${id} restaurant`;
  // }
}
