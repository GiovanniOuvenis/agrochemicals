import { NextRequest, NextResponse } from "next/server";
import connect from "../../../../lib/mongodb"
import  UserModel  from "@/models/user";


export async function POST(req: NextRequest, res : NextResponse) {   
    await connect();    
    const body = await req.json()
    const {email, name, password} = body
   const re = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/
   const test = re.test(email)

   if (!test) {
    return NextResponse.json("PLEASE PROVIDE VALID E MAIL ADDRESS")
   }   
const userExists = await UserModel.find({email})
   if (userExists.length) {
      return NextResponse.json("User has already registered with the provided e mail address")
   }

   const user = await UserModel.create({
   name,
   email,
   password
   })
   return NextResponse.json(user)
}