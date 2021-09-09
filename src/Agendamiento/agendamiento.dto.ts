import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { TipoServicio } from "src/enums/TipoServicio";


export class AgendamientoDto {
    
    @Type(()=> Date)
    @IsOptional()
    fecha_programada: Date;

    @IsString()
    @IsOptional()
    descripcion: string;
    
}