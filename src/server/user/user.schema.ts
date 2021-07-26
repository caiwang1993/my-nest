import { Schema } from 'mongoose';
import { string } from 'yargs';

export const userSchema = new Schema({
   // _id:{type:String,require:true},  // 覆盖 Mongoose 生成的默认 _id
    user_name:{type:String,require:true},
    password:{type:String,require:true}
})