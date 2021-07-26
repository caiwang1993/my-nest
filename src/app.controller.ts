import { Controller,Request, Get, Post, UseGuards, Req, Body, Param } from '@nestjs/common';
import { AuthGuard } from '@nestjs/passport';
import { ApiOperation } from '@nestjs/swagger';
import { AppService } from './app.service';
import { AuthService } from './server/auth/auth.service';
import { LocalAuthGuard } from './server/auth/local-auth.guard';

@Controller()
export class AppController {
  constructor(private readonly appService: AppService,private readonly authService:AuthService) {}

  @Get()
  getHello(): string {
    return this.appService.getHello();
  }

/*   @UseGuards(AuthGuard('local')) */
  @Post('auth/login')
  @ApiOperation({summary:'用户登录'})
  async login(@Body() body:any){
    return this.authService.login(body)
  }

  @UseGuards(AuthGuard('jwt'))
  @Get('profile')
  getProfile(@Param() param:any){
     return 'success'
  }
}
