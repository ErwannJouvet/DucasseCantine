import { Controller, Get, Post, Body, Patch, Param, Delete, Put, UseGuards } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { AuthGuard } from '@nestjs/passport';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    //enlever le readonly si fou la merde
  }

  //rajouter les params dans le get si fou la merde
  @Get()
  getAll() {
      return this.userService.getUsers();
  }

  @Get(':id')
  get(@Param() params) {
      return this.userService.getUser(params.id);
  }

  @Post()
  create(@Body() user : UserEntity) {
    return this.userService.createUser(user);
  }

  @Put()
  update(@Body() user : UserEntity) {
    return this.userService.updateUser(user);
  }

  @UseGuards(AuthGuard('jwt'))
  @Delete()
  delete(@Param() params) {
    return this.userService.deleteUser(params.id);
  }

  // @UseGuards(AuthGuard('jwt'))
  // @Delete()
  // delete(@Param() params) {
    
  // }


  // @Post()
  // create(@Body() createUserDto: CreateUserDto) {
  //   return this.userService.create(createUserDto);
  // }

  // @Get()
  // findAll() {
  //   return this.userService.findAll();
  // }

  // @Get(':id')
  // findOne(@Param('id') id: string) {
  //   return this.userService.findOne(+id);
  // }

  // @Patch(':id')
  // update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
  //   return this.userService.update(+id, updateUserDto);
  // }

  // @Delete(':id')
  // remove(@Param('id') id: string) {
  //   return this.userService.remove(+id);
  // }
}
