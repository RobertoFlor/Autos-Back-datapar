import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put, UseGuards } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiBearerAuth, ApiTags } from '@nestjs/swagger';
import { AgendamientoDto } from './agendamiento.dto';
import { AgendamientoService } from './agendamiento.service';

@ApiTags('Agendamiento')
@Controller('agendamiento')
export class AgendamientosController {

    constructor(private readonly agendamiento: AgendamientoService) {}

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get()
  async getMany() {
    const data = await this.agendamiento.getAll();
    return { data };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.agendamiento.getById(id);
    return { data };
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Post()
  async createPost(@Body() dto: AgendamientoDto) {
    const data = await this.agendamiento.createOne(dto);
    return data;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: AgendamientoDto) {
    const data = await this.agendamiento.editOne(id, dto);
    return data;
  }

  @ApiBearerAuth()
  @UseGuards(AuthGuard('jwt'))
  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.agendamiento.deleteOne(id);
    return data;
  }

}
