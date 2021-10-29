import { Injectable, UnauthorizedException } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { Passport } from "passport";
import { Strategy } from "passport-local";
import { AsyncSubject } from "rxjs";
import { AuthService } from "./auth.service";

@Injectable()
export class LocalStragety extends PassportStrategy(Strategy)
{
    constructor(private authService: AuthService)
{  
    super();
}
async validate(username: string, password: string): Promise<any>{
    const user = await this.authService.validateUsers(username, password);
    if (!user){
        throw new UnauthorizedException();
    }
    return user;  
} 
}