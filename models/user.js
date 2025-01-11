import mongoose from "mongoose";

import uniqeValidator from "mongoose-unique-validator";

const userSchema= new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required"],
        trim:true,
        minLength:1,
        maxLength:20
    },
    email:{
        type:String,
        required:[true, "Email is required"],
        index:true,
        lowercase:true,
        unique:true,
        minLength:5,
        maxLength:20
    }, 
    password:String,
    role:{
        type:String,
        default:"user", //admin
    },
    image:String,
    restCode:{
        data:String,
        expiresAt:{
            type:Date,
             default:()=> new Date(Date.now()+10 *60*1000),
        }
    }
}, {timestamps:true});

userSchema.plugin(uniqeValidator)

export default mongoose.models.User || mongoose.model("User", userSchema)