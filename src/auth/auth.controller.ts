import { Controller, Post, Get, Req, Request, Body, HttpStatus, HttpCode, UseGuards } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthGuard } from '@nestjs/passport';
import { AuthDto } from './dto/auth.dto';
import { Tokens } from './types';
import { AtGuard, RtGuard } from 'src/common/guards';
import { GetCurrentUser,GetCurrentUserId, Public } from 'src/common/decorators';

@Public()
@Controller('auth')
export class AuthController {
    constructor (private authService: AuthService){}

    @Post('/local/signup')
    @HttpCode(HttpStatus.CREATED)
    signupLocal (@Body() auth:AuthDto): Promise<Tokens> {
        
       return this.authService.signupLocal(auth);
    }

    @Public()
    @Post('/local/signin')
    @HttpCode(HttpStatus.OK)
    signinLocal(@Body() auth:AuthDto):Promise<Tokens>{
      return  this.authService.signinLocal(auth)
    }

    // @UseGuards(AuthGuard('jwt'))
    // @UseGuards(AtGuard) // changed from main.ts 
    @Post('/logout')
    @HttpCode(HttpStatus.OK)
    // logout(@Req() req:Request){
        logout(@GetCurrentUserId() userId:number){
         //const user=req.user
        //  return this.authService.logout(user["sub"])
        console.log(userId)
       return this.authService.logout(userId);
    }

    // @UseGuards(AuthGuard('jwt-refresh'))
    @Public()
    @UseGuards(RtGuard)
    @Post('/refresh')
    @HttpCode(HttpStatus.OK)
    refreshTokens(@GetCurrentUserId() userId:number,@GetCurrentUser('refreshToken') refreshToken:string){
        // const user = req.user
        // const this.authService.refreshTokens(user['sub'],user['refreshToken']);
        return this.authService.refreshTokens(userId,refreshToken)
    }
}
