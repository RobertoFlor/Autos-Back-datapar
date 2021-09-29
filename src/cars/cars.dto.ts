import { Type } from "class-transformer";
import { IsEnum, IsInt, IsNotEmpty, IsOptional, IsString} from "class-validator";
import { Situacion } from "src/enums/Situacion";

export class CarsDto {
    
    @IsString()
    @IsOptional()
    fabricante: string;

    @IsString()
    @IsOptional()
    modelo: string;

    @IsEnum(Situacion, {message: 'Error en situacion'})
    situacion: Situacion;

    @IsInt()
    @IsOptional()
    AnioFabricacion: number;

    @IsInt()
    @IsOptional()
    AnioModelo: number;

    //ver para cambiar 
    @IsInt()
    @IsOptional()
    kilometraje: number;

    @IsString()
    @IsOptional()
    chapa: string;

    @IsString()
    @IsOptional()
    chasis: string;

    @IsString()
    @IsOptional()
    descripcion: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(() => Date)
    @IsOptional()
    fechaAlteracion:Date;

}