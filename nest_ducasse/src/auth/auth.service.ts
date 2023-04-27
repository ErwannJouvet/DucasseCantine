import { Injectable } from '@nestjs/common';
import * as bcrypt from 'bcrypt';
import { JwtService } from '@nestjs/jwt';
import { UserService } from 'src/user/user.service';
const randtoken = require('rand-token');


@Injectable()
export class AuthService {
    constructor(private userService : UserService, private jwtService : JwtService) {
    }

    async validateUser(username : string, pass : string) : Promise<any> {
        const user = await this.userService.findOne(username);
        if (user) {
            //la syntaxe ci dessous signifie qu'on retourne toutes les données de notre requête dans "result" sauf le password.
            const { password, ...result } = user;
            const isMatch = await bcrypt.compare(pass, user.password);
            if (isMatch) {
                return result;
            }
        }
        return null;
    }

    async generateRefreshToken(userId): Promise<string>{
        var refreshToken = randtoken.generate(16);
        var expirydate =new Date();
        expirydate.setDate(expirydate.getDate() + 6);
        await this.userService.saveOrUpdateRefreshToken(refreshToken, userId, expirydate);
        return refreshToken
      }
    
    async login(user: any) {
        const payload = { username: user.email, sub: user.id };
        return {
          access_token: this.jwtService.sign(payload),
          refresh_token: await this.generateRefreshToken(user.id)
        };
    }
}
