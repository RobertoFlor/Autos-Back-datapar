import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { TipoServicioController } from './tiposervicio.controller';
import { TipoServicio } from './tiposervicio.entity';
import { TipoServicioService } from './tiposervicio.service';

@Module({
  imports: [TypeOrmModule.forFeature([TipoServicio])],
  controllers: [TipoServicioController],
  providers: [TipoServicioService]
})
export class TipoServicioModule {}
