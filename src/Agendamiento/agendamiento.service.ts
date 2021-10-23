import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { AgendamientoDto } from './agendamiento.dto';
import { Agendamiento } from './agendamiento.entity';

@Injectable()
export class AgendamientoService {
    constructor(
        @InjectRepository(Agendamiento)
        private readonly repository: Repository<Agendamiento>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('not exist');
        return post;
      }
    
      async createOne(dto: AgendamientoDto) {
        const agendamiento = this.repository.create(dto);
        return await this.repository.save(agendamiento);
      }
    
      async editOne(id: number, dto: AgendamientoDto) {
        const agendamiento = await this.repository.findOne(id);
    
        if (!agendamiento) throw new NotFoundException('not exist');
    
        const editedAgendamiento = Object.assign(agendamiento, dto);
        return await this.repository.save(editedAgendamiento);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
