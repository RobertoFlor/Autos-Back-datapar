import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsNumber, IsOptional, IsString, Length } from "class-validator";
import { TipoAgendamiento } from "src/enums/TipoAgendamiento";
import { Uso } from "src/enums/Uso";



export class AgendamientoDto {
    @Type(()=> Date)
    @IsOptional()
    fecha_programada: Date;

    @IsString()
    @IsOptional()
    descripcion: string;

    @IsString()
    @IsOptional()
    periodo: string;

    @IsEnum(Uso, {message: 'Error en situacion'})
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