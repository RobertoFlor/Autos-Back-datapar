import { Injectable, NotFoundException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { ChangeUserPassDto } from './changeUserPass.dto';
import { UsersDto} from './users.dto';
import { Users } from './users.entity';

@Injectable()
export class UsersService {
  getUsersByLogin(login: string) {
    throw new Error("Method not implemented.");
  }
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



      async getUserByLogin(login:string){
        return await this.repository.findOne({login});
    }
  
      //aut
      async changePassword(dto:ChangeUserPassDto){
        const user = await this.repository.findOne({login:dto.login});
        if(user && await user.validatePassword(dto.password)){
            const editUser = Object.assign(user,{password:dto.newPassword});
            return await this.repository.save(editUser);
        }else{
            throw new NotFoundException('User dont exist or password incorrect');
        }
    }


    
}
    


