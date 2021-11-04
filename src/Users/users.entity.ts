import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";
import { Servicios } from "src/Servicios/servicios.entity";
import { BeforeInsert, BeforeUpdate, Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { classToPlain, Exclude } from "class-transformer";
import * as bcrypt from 'bcrypt';
@Entity()
export class Users{
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nombreApellido: string;

    @Column()
    login: string;

    @Column()
    @Exclude({ toPlainOnly: true})
    password: string;

    @Column()
    situacion: Situacion;

    @Column()
    tipoUsuario: TipoUsuario;

    @Column()
    fechaCreacion: Date;

    @Column()
    fechaAlteracion:Date;

    @OneToMany(() => Servicios, (servicios) => servicios.users, {
        eager: true,
        persistence: true,
      })
      servicios: Servicios[];

    
      @OneToMany(() => Agendamiento, (agendamiento) => agendamiento.users, {
        eager: true,
        persistence: true,
      })
      agendamiento: Agendamiento[];

      toJSON(){
        return classToPlain(this);
      }
      //aut
      @BeforeInsert()
      @BeforeUpdate()
      async hashPassword() {
        if(!this.password){
          this.password = this.login;
        }
        const salt = await bcrypt.genSalt();
        this.password = await bcrypt.hash(this.password, salt);
      }
  
      async validatePassword(password: string){
          return await bcrypt.compareSync(password, this.password);
        }


}