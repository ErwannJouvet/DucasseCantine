import { Body, Injectable, UnauthorizedException } from '@nestjs/common';
import { PassportStrategy } from '@nestjs/passport';
import { ExtractJwt, Strategy } from 'passport-jwt';
import { UserService } from 'src/user/user.service';
import { jwtConstants } from './constants';

@Injectable()
export class JwtAdminStrategy extends PassportStrategy(Strategy, 'jwt-admin') {
  constructor(private userService: UserService) {
    super({
      jwtFromRequest: ExtractJwt.fromBodyField('access_token'),
      ignoreExpiration: true,
      secretOrKey: jwtConstants.secret,
      passReqToCallback: true,
    });
  }

  async validate(payload: any) {
    const user = await this.userService.findOne(payload.username);
    if (!user || (user.rang.id !== 1 && user.rang.id !== 2)) {
      throw new UnauthorizedException();
    }

    const { password, ...result } = user;
    return result;
  }
}
