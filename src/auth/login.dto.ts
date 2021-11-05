import { ApiProperty } from "@nestjs/swagger";
import { IsString } from "class-validator";

export class LoginDTO {
  @ApiProperty()
  @IsString()
  login: string;
  
  @ApiProperty()
  @IsString()
  password: string;
}