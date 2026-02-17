import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
    constructor(private readonly usersService: UsersService, private jwtService: JwtService) { }

    async validateUser(email: string, pass: string) {
        const user = await this.usersService.findByEmail(email);

        if (user && await bcrypt.compare(pass, user.password)) {
            const { password, ...result } = user;
            return result;

        }
        throw new UnauthorizedException('Invalid credentials');
    }



    async login(user: any) {
        
        const roles = user.roles.map(role => role.role.name);
        const payload = { email: user.email, sub: user.id, roles, nickname: user.nickname};
        return {
            access_token: this.jwtService.sign(payload),
        };
    }
}
