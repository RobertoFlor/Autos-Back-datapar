import { Module } from '@nestjs/common';
import { ConfigModule } from '@nestjs/config';
import { JwtModule } from '@nestjs/jwt';
import { PassportModule } from '@nestjs/passport';
import { UsersModule } from 'src/Users/users.module';
import { AuthController } from './auth.controller';
import { AuthService } from './auth.service';
import { JwtStrategy } from './jwt.strategy';


@Module({
    imports: [
      ConfigModule.forRoot(),
      UsersModule,
      PassportModule,
      JwtModule.register({
        secret: process.env.SECRET_KEY,
        signOptions: { expiresIn: '3600s' },
      }),
    ],
    controllers: [AuthController],
    providers: [AuthService,JwtStrategy],
    exports: [AuthService],
  })
export class AuthModule {}
