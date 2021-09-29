import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { T_Servicio } from "src/enums/T_Servicio";

export class ServiciosDto {
      
    @IsString()
    @IsOptional()
    descripcion: string;

    @IsNumber()
    @IsOptional()
    KmInicial: number;

    @IsNumber()
    @IsOptional()
    KmFinal: number;

    @IsEnum(T_Servicio, {message: 'Error en tipo servicio'})
    t_Servicio: T_Servicio;

    @IsNumber()
    @IsOptional()
    ValorServicio: number;

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