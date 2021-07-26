import { Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { UserService } from '../user/user.service';
import { authDTO } from './auth.dto';

@Injectable()
export class AuthService {
   constructor(private readonly userService:UserService,private readonly jwtService:JwtService){}

   async validateUser(username:string,password:string):Promise<any>{
      const user = await this.userService.findOne({"user_name":username})
      if (user && user.password === password) {
        const { password, ...result } = user;
        return result;
      }
   }

   async login(user:any){
       const payload = {username:user.username,sub:user.userId}

       return {
           access_token:this.jwtService.sign(payload)
       }

   }
}
