import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsOptional, IsPassportNumber, IsString, Length } from "class-validator";
import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";


export class UsuariosDto {
    
    @Length(1)
    @IsString()
    nombre: string;

    @IsString()
    @IsOptional()
    login: string;

    @IsString()
    @IsOptional()
    password: string;
    
    @IsEnum(Situacion, {message:'Error en situacion'})
    situacion: Situacion;

    @IsEnum(TipoUsuario,{message: 'Error en tipo usuario'})
    tipoUsuario: TipoUsuario;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(() => Date)
    @IsOptional()
    fechaAlteracion:Date;
}

