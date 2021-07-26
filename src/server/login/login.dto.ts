import { ApiPropertyOptional } from "@nestjs/swagger"
import { IsNotEmpty } from "class-validator"

export class loginDTO{
    @ApiPropertyOptional({description:'用户名'})
    @IsNotEmpty({message:'用户名不能为空'})
    username:string
    @ApiPropertyOptional({description:'密码'})
    password:string
}