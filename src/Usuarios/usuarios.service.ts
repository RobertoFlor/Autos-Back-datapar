import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangeUserPassDto } from './changeUserPass.dto';
import { UsuariosDto} from './usuarios.dto';
import { Usuarios } from './usuarios.entity';

@Injectable()
export class UsuariosService {
  
    constructor(
        @InjectRepository(Usuarios)
        private readonly repository: Repository<Usuarios>,
      ) {}
      
    
      async getAll() {
        return await this.repository.find();
      }
    
      async getById(id: number) {
        const post = await this.repository.findOne(id);
        if (!post) throw new NotFoundException('El id ingresado no existe');
        return post;
      }
    
      async createOne(dto: UsuariosDto) {
        const usuarios = this.repository.create(dto);
        return await this.repository.save(usuarios);
      }
    
      async editOne(id: number, dto: UsuariosDto) {
        const usuarios = await this.repository.findOne(id);
    
        if (!usuarios) throw new NotFoundException('El id ingresado no existe');
    
        const editedUsuarios = Object.assign(usuarios, dto);
        return await this.repository.save(editedUsuarios);
      }
    
      async deleteOne(id: number) {
        return await this.repository.delete(id);
      }


      //Auth
      async getUserByLogin(login:string){
        return await this.repository.findOne({login});
    }

    async changePassword(dto:ChangeUserPassDto){
        const user = await this.repository.findOne({login:dto.login});
        if(user && await user.validatePassword(dto.password))
        {
            const editUser = Object.assign(user,{password:dto.newPassword});
            return await this.repository.save(editUser);
        }
        else
        {
            throw new NotFoundException('Error en el usuario o contraseña ... ');
        }
    }   
}
    


