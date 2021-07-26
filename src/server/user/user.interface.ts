import { Document } from "mongoose";
export interface User extends Document {
    /* readonly _id:String, */
    readonly user_name:String,
    readonly password:String,
}
