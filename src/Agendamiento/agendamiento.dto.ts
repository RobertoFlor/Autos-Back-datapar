import { ApiProperty } from "@nestjs/swagger";
import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { Cars } from "src/cars/cars.entity";
import { TipoServicio } from "src/enums/TipoServicio";


export class AgendamientoDto {
    @ApiProperty()
    cars: Cars;

    @Type(()=> Date)
    @IsOptional()
    fecha_programada: Date;

    @IsString()
    @IsOptional()
    descripcion: string;
    
}