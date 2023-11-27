import { Injectable } from "@nestjs/common";
import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { JwtPayload } from "../types";

@Injectable()
export class AtStrategy extends PassportStrategy(Strategy, 'jwt'){
    constructor(){
        console.log("first")
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //ignoreExpiration:false,
            secretOrKey:'at-scret',
        });
    }

    validate(payload:JwtPayload){ //data from accessToken 
        //console.log(payload)
        return payload;
        // req.user=payload 
    }
}