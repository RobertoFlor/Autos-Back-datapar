import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { EstadoServicio } from "src/enums/EstadoServicio";

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