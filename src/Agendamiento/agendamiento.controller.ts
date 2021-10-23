import { Body, Controller, Delete, Get, Param, ParseIntPipe, Post, Put } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AgendamientoDto } from './agendamiento.dto';
import { AgendamientoService } from './agendamiento.service';

@ApiTags('Agendamiento')
@Controller('agendamiento')
export class AgendamientosController {

    constructor(private readonly agendamiento: AgendamientoService) {}

  @Get()
  async getMany() {
    const data = await this.agendamiento.getAll();
    return { data };
  }

  @Get(':id')
  async getById(@Param('id', ParseIntPipe) id: number) {
    const data = await this.agendamiento.getById(id);
    return { data };
  }

  @Post()
  async createPost(@Body() dto: AgendamientoDto) {
    const data = await this.agendamiento.createOne(dto);
    return data;
  }

  @Put(':id')
  async editOne(@Param('id') id: number, @Body() dto: AgendamientoDto) {
    const data = await this.agendamiento.editOne(id, dto);
    return data;
  }

  @Delete(':id')
  async deleteOne(@Param('id') id: number) {
    const data = await this.agendamiento.deleteOne(id);
    return data;
  }

}
