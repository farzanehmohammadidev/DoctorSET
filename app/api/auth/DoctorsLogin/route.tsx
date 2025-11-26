import { connectDB } from "@/lib/Conect";
import Doctor from "@/model/doctors/Doctors";
import { NextResponse } from "next/server";
interface Irequest{
    username:string,
    password:string
}
export async function POST(req: Request): Promise<NextResponse>{
try{
await connectDB();
const {username , password}:Irequest = await req.json();
if(!username.trim() || !password.trim()) return NextResponse.json({error: "واسه وارد شدن به سایت فیلدها رو پر کن"}  , {status:400});
if(password.length < 8 || password.length>20) return NextResponse.json({error:"پسوورد شما نباید کمتر از 8 کاراکتر یا بیشتر از 20 کاراکتر باشه!"},{status:400})
    const normalizedUsername = username.trim()
const findUser = await Doctor.findOne({username:normalizedUsername})
if(!findUser) return NextResponse.json({error:"این کاربر وجود ندارد"},{status:401})
    if(findUser.password !== password) return NextResponse.json({error:"رمز شما اشتباهه!"},{status:500})
return NextResponse.json("cfgvbhjnmk,l")
}catch{
return NextResponse.json("dfcgvhbjnkml")
}
}