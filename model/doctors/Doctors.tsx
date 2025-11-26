import { model, models, Schema, Document } from "mongoose";
interface IDoctors {
  name: string;
  family: string;
  username:string;
  password:string;
  email: string;
  phone: number;
  medId: number; // شماره نظام پزشکی
  address: string;
  role: string;
  specialty: string;
}
export interface IDoctorsDoc extends Document, IDoctors {}

const DoctorsSchema = new Schema<IDoctorsDoc>(
  {
    name: { type: String, required: true },
    family: { type: String, required: true },
    username:{type:String , required:true},
    password:{type:String , required:true},
    email: { type: String },
    phone: { type: Number, required: true },
    medId: { type: Number, required: true },
    address: { type: String, required: true },
    specialty: { type: String, required: true },
    role: { type: String, required: true },
  },
  { collection: "doctors", timestamps: true }
);

const Doctor = models.Doctor || model<IDoctorsDoc>("Doctor", DoctorsSchema);
export default Doctor;
