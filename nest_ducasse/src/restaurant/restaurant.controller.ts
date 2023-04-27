import { Controller, Get, Post, Body, Patch, Param, Delete, Put } from '@nestjs/common';
import { RestaurantService } from './restaurant.service';
import { CreateRestaurantDto } from './dto/create-restaurant.dto';
import { UpdateRestaurantDto } from './dto/update-restaurant.dto';
import { RestaurantEntity } from './entities/restaurant.entity';

@Controller('restaurant')
export class RestaurantController {
  constructor(private readonly restaurantService: RestaurantService) {
    
  }
  
  @Get()
  getAll() {
    return this.restaurantService.getRestaurants();
  }
  
  @Get(':id')
  get(@Param('id') id: string) {
    return this.restaurantService.getRestaurant(+id);
  }
  
  @Post()
  create(@Body() restaurant : RestaurantEntity) {
    return this.restaurantService.createRestaurant(restaurant);
  }

  @Put()
  update(@Body() restaurant : RestaurantEntity) {
    return this.restaurantService.updateRestaurant( restaurant);
  }
  @Delete(':id')
  delete(@Param() params) {
    return this.restaurantService.deleteRestaurant(params.id);
  }
  
  // @Put(':id')
  // update(@Param('id') id: string, @Body() updateRestaurantDto: UpdateRestaurantDto) {
  //   return this.restaurantService.update(+id, updateRestaurantDto);
  // }

  // @Delete(':id')
  // delete(@Param('id') id: number) {
  //   return this.restaurantService.deleteRestaurant(id);
  // }
}
