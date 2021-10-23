import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import {CarsModule} from "./cars/cars.module";
import {UsersModule} from "./Users/users.module";
import {ServiciosModule} from "./Servicios/servicios.module";
import { AgendamientoModule } from './Agendamiento/agendamiento.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'postgres',
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '673662',
      database: 'test9',
      entities: [__dirname + './**/**/*entity{.ts,.js}'],
      autoLoadEntities: true,
      synchronize: true,
      logging: true,
      logger: 'file',
    }),
    CarsModule,
    UsersModule,
    ServiciosModule,
    AgendamientoModule
  ],
  controllers: [AppController],
  providers: [AppService],
})

export class AppModule {}
