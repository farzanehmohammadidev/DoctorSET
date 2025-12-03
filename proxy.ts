import { NextRequest, NextResponse } from "next/server";
import jwt from "jsonwebtoken";

interface ITokenPayload extends jwt.JwtPayload {
  role: string;
  username: string;
}

export async function proxy(req: NextRequest) {
  const token = req.cookies.get("token")?.value;
 
  if (!token || token.trim() === "") {
    return NextResponse.next();
  }
  const verifyToken = jwt.verify(
    token!,
    process.env.JWT_SECRET!
  ) as ITokenPayload;
  if(verifyToken.role == "doctor"){
    if (token && req.nextUrl.pathname.startsWith("/DoctorsLogin"))
      return NextResponse.redirect(new URL("/", req.url));
  }
  if(verifyToken.role == "patient"){
     if (token && req.nextUrl.pathname.startsWith("/PatientsLogin"))
      return NextResponse.redirect(new URL("/", req.url));
  }
}
export const config = {
  matcher: ["/DoctorsLogin/:path*", "/PatientsLogin/:path*"],
};
