import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AgendamientosController } from './agendamiento.controller';
import { Agendamiento} from './agendamiento.entity';
import { AgendamientoService } from './agendamiento.service';

@Module({
  imports: [TypeOrmModule.forFeature([Agendamiento])],
  controllers: [AgendamientosController],
  providers: [AgendamientoService]
})
export class AgendamientoModule {}
