import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { UsersDto} from './users.dto';
import { Users } from './users.entity';

export type User = any;

@Injectable()
export class UsersService {
    constructor(
        @InjectRepository(Users)
        private readonly repository: Repository<Users>,
      ) {}
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('El id ingresado no existe');
        return post;
      }
    
      async createOne(dto: UsersDto) {
        const users = this.repository.create(dto);
        return await this.repository.save(users);
      }
    
      async editOne(id: number, dto: UsersDto) {
        const users = await this.repository.findOne(id);
    
        if (!users) throw new NotFoundException('El id ingresado no existe');
    
        const editedUsers = Object.assign(users, dto);
        return await this.repository.save(editedUsers);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }
    }

