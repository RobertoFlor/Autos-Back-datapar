import { Type } from "class-transformer";
import { IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";
import { Cars } from "./cars.entity";

export class CarsDto {

    @IsNotEmpty()
    cars:Cars;

    @IsString()
    @IsOptional()
    fabricante: string;

    @IsString()
    @IsOptional()
    modelo: string;

    @IsString()
    @IsOptional()
    situacion:string;

    @IsInt()
    @IsOptional()
    AnioFabricacion: number;

    @IsInt()
    @IsOptional()
    AnioModelo: number;

    //NO FUNCIONA 
    //CORRIGELO -_-
    @IsInt()
    @IsOptional()
    kilometraje: number;

    @IsString()
    @IsOptional()
    chapa: string;

    @IsString()
    @IsOptional()
    chasis: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

}