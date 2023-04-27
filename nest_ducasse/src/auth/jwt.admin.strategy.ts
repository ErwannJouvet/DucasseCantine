import { PassportStrategy } from '@nestjs/passport';
import { Strategy, ExtractJwt } from 'passport-jwt';
import {Injectable, UnauthorizedException, Body} from '@nestjs/common';
import { jwtConstants } from './constants';
import { UserService } from 'src/user/user.service';
 
@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy,"jwt-admin") {
  constructor(private userService:UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('access_token'),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
      passReqToCallback:true
    });
  }
 
  async validate(payload: any) {
    var user = await this.userService.findOne(payload.username);
    if (!user || (user.rang.id !== 1 && user.rang.id !==2)) {
        throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    return result;
  }
}