import { PassportStrategy } from "@nestjs/passport";
import { ExtractJwt, Strategy } from "passport-jwt";
import { Request } from 'express';
import { Injectable, ForbiddenException } from "@nestjs/common";
import {JwtPayload} from "../types"

@Injectable()
export class RtStrategy extends PassportStrategy(Strategy,"jwt-refresh"){
    constructor(){
        super({
            jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
            //ignoreExpiration:false,
            secretOrKey:'rt-scret',
            passReqToCallback:true // will take to return refresh token true check
        });
    }

    validate(req:Request,payload:JwtPayload):any{ //data from accessToken 
        const refreshToken = req
        ?.get('authorization')
        ?.replace('Bearer', '')
        .trim();

        if (!refreshToken) throw new ForbiddenException('Refresh token malformed')

        return {
            ...payload,
            refreshToken,
        }
        // req.user=payload 
    }
}