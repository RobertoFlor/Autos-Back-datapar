import { Type } from "class-transformer";
import { IsDate, IsEnum, IsOptional, IsString, Length } from "class-validator";


export class UsuariosDto {
    
    @Length(1)
    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    login: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

}