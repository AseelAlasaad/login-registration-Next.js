import { NextResponse } from "next/server";
import dbConnect from "@/utils/dbConnect";
import User from "@/models/user";

import bcrypt from "bcrypt"

export async function POST(req){
    await dbConnect()
    const body = await req.json();
    const {name, email , password}= body
    try {
       const user= await User.create({
            name,
            email,
            password: await bcrypt.hash(password,10)
        })
      console.log("user created=>",user );
      return NextResponse.json(user, {status:201})

    } catch (error) {
        console.log(error);
        return NextResponse.json({error:error.message}, {status:500})
        
    }
}