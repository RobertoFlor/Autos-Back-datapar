import { Type } from "class-transformer";
import { IsEnum, IsNotEmpty, IsOptional, IsString } from "class-validator";
import { Cars } from "src/cars/cars.entity";
import { TipoAgendamiento } from "src/enums/TipoAgendamiento";
import { Uso } from "src/enums/Uso";
import { Servicios } from "src/Servicios/servicios.entity";
import { TiposServicios } from "src/tipos-servicios/tipos-servicios.entity";
import { Usuarios } from "src/Usuarios/usuarios.entity";



export class AgendamientoDto {
    @IsNotEmpty()
    car:Cars;

    @IsNotEmpty()
    usuarios: Usuarios;

    @IsNotEmpty()
    tiposservicio: TiposServicios;
  
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsString()
    @IsOptional()
    periodo: string;

    @IsEnum(Uso, {message: 'Error en la carga del uso'})
    uso: Uso;

    @IsEnum(TipoAgendamiento, {message: 'Error tipo agendamiento'})
    tipoAgendamiento: TipoAgendamiento;

    @Type(()=> Date)
    @IsOptional()
    fecha_Objetivo: Date;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(() => Date)
    @IsOptional()
    fechaAlteracion:Date;
    
}