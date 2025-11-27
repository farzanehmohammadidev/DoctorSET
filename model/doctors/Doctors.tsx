import { model, models, Schema, Document } from "mongoose";
interface IDoctors {
  name: string;
  family: string;
  username: string;
  password: string;
  email: string;
  phonenumber: string;
  nationalID: string;
  medId: string; // شماره نظام پزشکی
  address: string;
  role: string;
  specialty: string;
}
export interface IDoctorsDoc extends Document, IDoctors {}

const DoctorsSchema = new Schema<IDoctorsDoc>(
  {
    name: { type: String, required: true },
    family: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String },
    nationalID: { type: String, required: true },
    phonenumber: { type: String, required: true },
    medId: { type: String, required: true },
    address: { type: String, required: true },
    specialty: { type: String, required: true },
    role: { type: String, required: true },
  },
  { collection: "doctors", timestamps: true }
);

const Doctor = models.Doctor || model<IDoctorsDoc>("Doctor", DoctorsSchema);
export default Doctor;
