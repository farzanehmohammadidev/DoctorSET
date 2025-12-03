import { connectDB } from "@/lib/Conect";
import Patient from "@/model/patient/Patient";
import { NextResponse } from "next/server";
import jwt from "jsonwebtoken";
import { revalidatePath } from "next/cache";
import bcrypt from "bcryptjs";
import { cookies } from "next/headers";

interface Irequest {
  username: string;
  password: string;
}
export async function POST(req: Request): Promise<NextResponse> {
  const cookiesStorag = await cookies();
  const oldToken = cookiesStorag.get("token")?.value;
  try {
    await connectDB();
    const { username, password }: Irequest = await req.json();
    if (!username.trim() || !password.trim())
      return NextResponse.json(
        { error: "واسه وارد شدن به سایت فیلدها رو پر کن" },
        { status: 400 }
      );
    if (password.length < 8 || password.length > 20)
      return NextResponse.json(
        {
          error:
            "پسوورد شما نباید کمتر از 8 کاراکتر یا بیشتر از 20 کاراکتر باشه!",
        },
        { status: 400 }
      );
    const normalizedUsername = username.trim();
    const findUser = await Patient.findOne({ username: normalizedUsername });
    if (!findUser)
      return NextResponse.json(
        { error: "این کاربر وجود ندارد" },
        { status: 401 }
      );
    const isValidPassword: boolean = await bcrypt.compare(
      password,
      findUser.password
    );

    if (!isValidPassword)
      return NextResponse.json({ error: "رمز شما اشتباهه!" }, { status: 500 });
    const token: string = jwt.sign(
      { username: findUser.username, role: findUser.role },
      process.env.JWT_SECRET!,
      { expiresIn: "2h" }
    );
    if (oldToken) {
      const decoded = jwt.verify(oldToken, process.env.JWT_SECRET!) as {
        role: string;
      };
      if (decoded.role !== "patient") {
        const response = NextResponse.json({
          success: true,
          message: "تبریک! شما وارد سایت شدید",
        });
        response.cookies.delete({ name: `token`, path: "/" });
        response.cookies.set({
          name: "token",
          value: token,
          httpOnly: true,
          sameSite: "lax",
          path: "/",
          maxAge: 60 * 60 * 2,
        });
        revalidatePath("/");
        return response;
      }
    }
    const response = NextResponse.json({
      success: true,
      message: "تبریک! شما وارد سایت شدید",
    });
    response.cookies.set({
      name: "token",
      value: token,
      httpOnly: true,
      sameSite: "lax",
      path: "/",
      maxAge: 60 * 60 * 2,
    });
    revalidatePath("/");
    return response;
  } catch (err) {
    return NextResponse.json(err);
  }
}
