import { ApiPropertyOptional } from "@nestjs/swagger";

export class CreatUserDTO{
   // readonly _id:String;
   @ApiPropertyOptional({description:'用户名'})
    readonly user_name:String;
    @ApiPropertyOptional({description:'密码'})
    readonly password:String
}

export class EditUserDTO{
    readonly user_name:string;
    readonly password:string
}