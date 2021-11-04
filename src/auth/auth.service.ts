import { Injectable } from "@nestjs/common";
import { JwtService } from "@nestjs/jwt";
import { UsersService } from "src/Users/users.service";
import { JWTPayload } from "./jwt.payload";


@Injectable()
export class AuthService {
  constructor(
    private userService: UsersService,
    private jwtService: JwtService
  ) {}

  async validateUser(login: string, password: string){
    const user = await this.userService.getUserByLogin(login);
    if(!user){
      return false;
    }
    return await user.validatePassword(password);
  }

  async generateAccessToken(login: string) {
    const user = await this.userService.getUserByLogin(login)
    const payload:JWTPayload = { login: user.login };
    return {
      access_token: this.jwtService.sign(payload),
    };
  }
}