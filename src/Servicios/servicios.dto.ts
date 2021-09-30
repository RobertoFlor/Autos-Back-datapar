import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { Agendamiento } from "src/Agendamiento/agendamiento.entity";
import { Cars } from "src/cars/cars.entity";
import { EstadoServicio } from "src/enums/EstadoServicio";
import { TipoServicio } from "src/TipoServicio/tiposervicio.entity";
import { Usuarios } from "src/usuarios/usuarios.entity";

export class ServiciosDto {
    @IsNotEmpty()
    cars: Cars;

    @IsNotEmpty()
    usuarios: Usuarios;

    @IsNotEmpty()
    agendamiento: Agendamiento;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsNumber()
    @IsOptional()
    KmInicial: number;

    @IsNumber()
    @IsOptional()
    KmFinal: number;

    @IsNumber()
    @IsOptional()
    ValorServicio: number;

    @IsEnum(EstadoServicio,{message: 'Error en estado servicio'})
    estadoServicio: EstadoServicio;

    @Type(()=> Date)
    @IsOptional()
    fechaInicio: Date;

    @Type(()=> Date)
    @IsOptional()
    fechaFinal: Date;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(() => Date)
    @IsOptional()
    fechaAlteracion:Date;

}