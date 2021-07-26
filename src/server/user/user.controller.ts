import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { debug } from 'console';
import { CreatUserDTO, EditUserDTO } from './user.dto'
import { User } from './user.interface';
import { UserService } from './user.service'

interface UserResponse<T = unknown> {
    code: number;
    data?: T;
    message: string
}


@Controller('user')
@ApiTags('用户模块')
export class UserController {
     constructor (private readonly userService:UserService){}
    //Get user/users
    @ApiOperation({ summary: '查询所有用户' })
    @Get('users')
    async findAll(): Promise<UserResponse<User[]>> {
        return {
            code: 200,
            data: await this.userService.findAll(),
            message:'success'
        }
    }
    
    @Post()
    @ApiOperation({summary:'新增用户'})
    async addOne(@Body() body:CreatUserDTO):Promise<UserResponse>{
        console.log(body);
        
        await this.userService.addOne(body)
        return {
            code:200,
            message:'新增用户成功！'
        }
    }
}
