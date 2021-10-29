import { Module } from '@nestjs/common';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/Users/users.module';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';
import { LocalStragety } from './local.stragety';
import { SessionSerializer } from './session.serializer';

//Ver para cambiar seguridad 
@Module({
  imports: [UsersModule, PassportModule, JwtModule.register({
    secret: 'SECRET',
    signOptions: {expiresIn: '360s'}
  })],
  providers: [AuthService, LocalStragety, JwtStrategy],
  exports: [AuthService]
})
export class AuthModule {}
