import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppService } from './app.service';
import {CarsModule} from "./cars/cars.module";
import { UsuariosModule} from "./Usuarios/usuarios.module";
import {ServiciosModule} from "./Servicios/servicios.module";
import { AgendamientoModule } from './Agendamiento/agendamiento.module';
import { ConfigModule } from '@nestjs/config';
import { AuthModule } from './auth/auth.module';
import { TiposServiciosModule } from './tipos-servicios/tipos-servicios.module';

@Module({
  imports: [ConfigModule.forRoot({
    envFilePath:'.env'
  }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '673662',
      database: 'test32',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    CarsModule,
    UsuariosModule,
    ServiciosModule,
    TiposServiciosModule,
    AgendamientoModule,
    AuthModule
  ],
  controllers: [],
  providers: [AppService],
})

export class AppModule {}
