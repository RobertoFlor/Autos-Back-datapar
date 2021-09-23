import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { Cars } from "src/cars/cars.entity";
import { TipoServicio } from "src/enums/TipoServicio";
import { Usuarios } from "src/usuarios/usuarios.entity";


export class ServiciosDto {
    @ApiProperty()
    cars: Cars;

    @ApiProperty()
    usuarios: Usuarios;
    
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsNumber()
    @IsOptional()
    KmInicial: number;

    @IsNumber()
    @IsOptional()
    KmFinal: number;

    @IsEnum(TipoServicio, {message: 'Error en tipo servicio'})
    tipoServicio: TipoServicio;

    @IsNumber()
    @IsOptional()
    ValorServicio: number;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

}