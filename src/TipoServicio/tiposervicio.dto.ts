import { Type } from "class-transformer";
import { IsDate, IsEnum, IsInt, IsOptional, IsPassportNumber, IsString, Length } from "class-validator";
import { Situacion } from "src/enums/Situacion";
import { TipoUsuario } from "src/enums/TipoUsuario";


export class TipoServicioDto {
    
    @Length(1)
    @IsString()
    descripcion: string;

    @Type(()=> Date)
    @IsOptional()
    fechaCreacion: Date;

    @Type(() => Date)
    @IsOptional()
    fechaAlteracion:Date;
}

function countryCode(countryCode: any, string: any, arg2: any) {
    throw new Error("Function not implemented.");
}
