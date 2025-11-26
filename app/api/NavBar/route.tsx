import NavBar from "@/model/NavBar/NavBar";
import { connectDB } from "@/lib/Conect";

export async function GET(): Promise<Response>{
    try{
        await connectDB();
        const navBar = await NavBar.find()
        return Response.json(navBar)
    }
    catch{
        return Response.json(JSON.stringify({error:"مشکلی در برقراری ارتباط به وجود امده است"}),{status:500})
    }
}