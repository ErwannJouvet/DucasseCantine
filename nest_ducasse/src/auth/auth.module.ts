import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { JwtAdminStrategy } from './jwt.admin.strategy';
import { UserModule } from 'src/user/user.module';
import { JwtStrategy } from './jwt.strategy';
import { JwtRefreshTokenStrategy } from './jwt.refreshtoken.strategy';
import { LocalStrategy } from './local.strategy';

@Module({
  imports: [UserModule, PassportModule,
            JwtModule.register({
              secret: jwtConstants.secret,
              signOptions: { expiresIn: '300s' },
            })],
  providers: [AuthService, LocalStrategy, JwtRefreshTokenStrategy, JwtStrategy, JwtAdminStrategy],
  exports: [AuthService]
})
export class AuthModule {}