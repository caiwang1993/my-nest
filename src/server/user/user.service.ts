import { Injectable } from '@nestjs/common';
import { InjectModel } from '@nestjs/mongoose';
import { Model } from 'mongoose';
import {User} from './user.interface'
import {CreatUserDTO,EditUserDTO} from './user.dto' 

@Injectable()
export class UserService {
    constructor(@InjectModel('Users') private readonly userModel:Model<User>){}

    // 查找所有用户
    async findAll():Promise<User[]>{
        const users = await this.userModel.find()
        return users
    }

    //查找单个用户
    async findOne(obj:any):Promise<User>{
        return await this.userModel.findOne(obj)
    }

    //添加单个用户
    async addOne(body:CreatUserDTO):Promise<void>{
        await this.userModel.create(body)
    }

    //编辑单个用户
    async editOne(_id:string,body:EditUserDTO):Promise<void>{
        await this.userModel.findByIdAndUpdate(_id,body)
    }

    //删除单个用户
    async deleteOne(_id:string):Promise<void>{
        await this.userModel.findByIdAndDelete(_id)
    }
}
