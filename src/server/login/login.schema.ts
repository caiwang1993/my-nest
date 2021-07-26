import { Schema } from "mongoose";

export const loginSchema = new Schema({
    username:{type:String,require:true},
    password:{type:String,require:true}

})