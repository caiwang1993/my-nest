import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './server/user/user.module';
import { LoginModule } from './server/login/login.module';
import { AuthModule } from './server/auth/auth.module';
import { IndexModule } from './server/index/index.module';

@Module({
  imports: [MongooseModule.forRoot('mongodb://localhost/nestPro'), UserModule, LoginModule, AuthModule, IndexModule],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
