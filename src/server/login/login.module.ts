import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { UserModule } from '../user/user.module';
import { LoginController } from './login.controller';
import { loginSchema } from './login.schema';
import { LoginService } from './login.service';
import {jwtConstants} from '../auth/constants'
import { JwtModule } from '@nestjs/jwt';


@Module({
  imports:[MongooseModule.forFeature([{name:'userLogin',schema:loginSchema}]),
  UserModule,
  JwtModule.register({
    secret: jwtConstants.secret,
    signOptions: { expiresIn: '60s' },
  })],
  controllers: [LoginController],
  providers: [LoginService]
})
export class LoginModule {}
