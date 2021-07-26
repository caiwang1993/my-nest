import { Body, Controller, Get, Post } from '@nestjs/common';
import { ApiOperation, ApiTags } from '@nestjs/swagger';
import { get } from 'http';
import { loginDTO } from './login.dto'
import { UserService } from './../user/user.service'
import { JwtService } from '@nestjs/jwt'

interface LoginResponse {
    code: number,
    msg: string,
    data?: object
}

@Controller('login')
@ApiTags('用户登录')
export class LoginController {
    constructor(
        private readonly userService: UserService,
        private readonly jwtService: JwtService
    ) { }

    @Post()
    @ApiOperation({ summary: '用户登录' })
    async login(@Body() body: loginDTO): Promise<LoginResponse> {
        console.log(body)
        const { username, password } = body;
        //查询用户名
        let user = await this.userService.findOne({ "user_name": username })
        console.log('结果---》:', user)
        if (!user || user.password !== password) {
            return {
                code: 500,
                msg: '用户名/密码错误'
            }
        }

        //生成token
        return {
            code: 200,
            data: {
                token: {
                    accessToken: this.jwtService.sign({username:username,sub:user._id})
                }
            },
            msg: 'success'
        }
    }

    @Get('getUserInfo')
    @ApiOperation({ summary: '获取用户信息' })
    async getUserInfo(): Promise<LoginResponse> {

        return {
            code: 200,
            data: {
                name: 'cww',
                avatar: '',
                introduction: '',
                role: {
                    permissions: []

                }
            },
            msg: 'success'
        }

    }
}
