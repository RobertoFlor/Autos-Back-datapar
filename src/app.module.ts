import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CarsModule} from "./cars/cars.module";
import {UsuariosModule} from "./usuarios/usuarios.module";
import {ServiciosModule} from "./Servicios/servicios.module";
import { AgendamientoModule } from './Agendamiento/agendamiento.module';
import { TipoServicioModule } from './TipoServicio/tiposervicio.module';


@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '673662',
      database: 'test12',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    CarsModule,
    UsuariosModule,
    ServiciosModule,
    AgendamientoModule,
    TipoServicioModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
