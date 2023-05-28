import {
  Body,
  Controller,
  Delete,
  Get,
  Param,
  Patch,
  Post,
  Put,
  UseGuards,
} from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserEntity } from './entities/user.entity';
import { UserService } from './user.service';

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) {
    //enlever le readonly si fou la merde
  }

  //Fontion qui permet de récupérer tous les utilisateurs
  @Get()
  getAll() {
    return this.userService.getUsers();
  }

  //Fonction qui permet de récupérer un utilisateur en fonction de son id
  @Get(':id')
  get(@Param() params) {
    return this.userService.getUser(params.id);
  }

  //Fonction qui permet de créer un utilisateur
  @Post()
  create(@Body() user: UserEntity) {
    return this.userService.createUser(user);
  }

  //Fonction qui permet de mettre à jour un utilisateur
  @Put()
  update(@Body() user: UserEntity) {
    return this.userService.updateUser(user);
  }

  //Fonction qui permet de supprimer un utilisateur
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
