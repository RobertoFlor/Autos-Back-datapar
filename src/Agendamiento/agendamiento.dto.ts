import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNotEmpty, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { Cars } from "src/cars/cars.entity";
import { TipoAgendamiento } from "src/enums/TipoAgendamiento";
import { Uso } from "src/enums/Uso";
import { Usuarios } from "src/usuarios/usuarios.entity";



export class AgendamientoDto {
    @IsNotEmpty()
    cars: Cars;

    @IsNotEmpty()
    usuarios: Usuarios;

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