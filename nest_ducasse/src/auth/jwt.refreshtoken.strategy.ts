import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {Injectable, UnauthorizedException, Body} from '@nestjs/common';
import { jwtConstants } from './constants';
import { UserService } from 'src/user/user.service';
 
@Injectable()
export class JwtRefreshTokenStrategy extends PassportStrategy(Strategy,"jwt-refreshtoken") {
  constructor(private usersService : UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('access_token'),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
      passReqToCallback:true
    });
  }
 
  async validate(req, payload: any) {
    var user = await this.usersService.findOne(payload.username);
    if(!user){
        throw new UnauthorizedException();
    }
    
    if(req.body.refresh_token != (await user).refreshToken){
        throw new UnauthorizedException();
    }
    
    if( new Date() > new Date((await user).refreshTokenExpires)){
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    
    return result;
  }
}