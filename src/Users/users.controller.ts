import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiTags } from '@nestjs/swagger';
import { ChangeUserPassDto } from './changeUserPass.dto';
import { UsersDto } from './users.dto';
import { UsersService } from './users.service';

@ApiTags('Users')
@Controller('users')
export class UsersController {

    constructor(readonly service: UsersService) {
    //aca
    }

  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getMany() {
    const data = await this.service.getAll();
    return { data };
  }

  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.service.getById(id);
    return { data };
  }

  @Post()
  async createPost(@Body() dto: UsersDto) {
    const data = await this.service.createOne(dto);
    return data;
  }
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: UsersDto) {
    const data = await this.service.editOne(id, dto);
    return data;
  }
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.service.deleteOne(id);
    return data;
  }

  
  //verificar 
  @UseGuards(AuthGuard('jwt'))
  @Post("ChangePassword")
    async changePass(@Body() dto: ChangeUserPassDto) {
      const data = await this.service.changePassword(dto);
      return data;
    }

}
