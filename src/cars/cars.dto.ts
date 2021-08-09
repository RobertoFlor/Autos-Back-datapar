import { Type } from "class-transformer";
import { IsEnum, IsOptional, IsString, Length} from "class-validator";
import {TipoServicio} from "../enums/TipoServicio";


export class CarsDto {

    @IsString()
    @IsOptional()
    situacion:string;

    @Length(1)
    @IsOptional()
    AnioFabricacion: number;

    @Length(1)
    @IsOptional()
    AnioModelo: number;

    @IsString()
    @IsOptional()
    chapa: string;

    @IsString()
    @IsOptional()
    chasis: string;

    @IsString()
    @IsOptional()
    fabricante: string;


    @Length(1)
    @IsOptional()
    kilometraje: number;

    @IsString()
    @IsOptional()
    modelo: string;


    @IsString()
    @IsString()
    titulo: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsEnum(TipoServicio, {message: `Opcion invalida`})
    tipoServicio: TipoServicio;

}