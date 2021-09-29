import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { TipoServicio } from './tiposervicio.entity';
import { TipoServicioDto } from './tiposervicio.dto';

@Injectable()
export class TipoServicioService {
    constructor(
        @InjectRepository(TipoServicio)
        private readonly repository: Repository<TipoServicio>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('El id ingresado no existe');
        return post;
      }
    
      async createOne(dto: TipoServicioDto) {
        const usuarios = this.repository.create(dto);
        return await this.repository.save(usuarios);
      }
    
      async editOne(id: number, dto: TipoServicioDto) {
        const usuarios = await this.repository.findOne(id);
    
        if (!usuarios) throw new NotFoundException('El id ingresado no existe');
    
        const editedUsuarios = Object.assign(usuarios, dto);
        return await this.repository.save(editedUsuarios);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }

}
