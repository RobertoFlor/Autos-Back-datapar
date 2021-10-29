import { PassportSerializer } from "@nestjs/passport";
import { deserializeUser } from "passport";

export class SessionSerializer extends PassportSerializer
{
    serializeUser(user: any, done: (err: Error, user: any) => void):any
    {
        done(null, user);
    }
    deserializeUser(payload: any, done:(err: Error, payload: string)=>void)
    {
        done(null, payload);
    }
}