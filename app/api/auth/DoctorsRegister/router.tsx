import { NextResponse } from "next/server";
import { connectDB } from "../../../../lib/Conect";
import Doctor from "../../../../model/doctors/Doctors";
import bcrypt from "bcryptjs";

export async function POST(req: Request): Promise<NextResponse> {
  try {
    await connectDB();
    const {
      name,
      family,
      phonenumber,
      email,
      username,
      password,
      specialty,
      addrress,
      NationalID,
    } = await req.json();
    const phonePattern = /^(\+98|0)?9\d{9}$/;
    const emailPttern =
      /^(?=.{1,64}@)[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[A-Za-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.)+[A-Za-z]{2,}$/;
    if (
      !name.trim() ||
      !family.trim() ||
      !NationalID.trim() ||
      !phonenumber.trim() ||
      !password.trim() ||
      !username.trim() ||
      !addrress.trim() ||
      !specialty.trim()
    )
      return NextResponse.json(
        { error: "فیلدها رو خالی نزار " },
        { status: 500 }
      );
    if (!phonePattern.test(phonenumber))
      return NextResponse.json(
        { error: "شماره تلفن اشتباه است" },
        { status: 400 }
      );
    if (!emailPttern.test(email))
      return NextResponse.json(
        { error: "یه ایمیل معتبر وارد کن" },
        { status: 400 }
      );
    const isUserExits = await Doctor.findOne({
      phonenumber,
      NationalID,
      username,
    });
    if (isUserExits)
      return NextResponse.json(
        { error: "شما از قبل عضو این سایت هستید" },
        { status: 401 }
      );
    if (password.length < 8 || password.length > 20)
      return NextResponse.json(
        {
          error: "پسوورد نمیتواند کتر از 8 کاراکتر یا بیشتر از 20 کاراکتر باشد",
        },
        { status: 401 }
      );
    const hashedPassword = await bcrypt.hash(password, 10);
    await Doctor.create({
      name,
      family,
      username,
      phonenumber,
      email,
      password: hashedPassword,
      NationalID,
      role: "doctor",
      specialty,
      addrress,
    });
    return NextResponse.json("ثبت نام شما با موفقیت انجام شد");
  } catch {
    return NextResponse.json({ error: "ثبت نام خود را مجدد بعد از چند دقیقه دیگر انجام دهید" });
  }
}
