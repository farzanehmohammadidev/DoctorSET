import { model, models, Schema, Document } from "mongoose";
interface IPatients {
  name: string;
  family: string;
  username: string;
  password: string;
  email: string;
  phonenumber: string;
  nationalID: string;
  role: string;
}
export interface IPatientDoc extends Document, IPatients {}

const patientSchema = new Schema<IPatientDoc>(
  {
    name: { type: String, required: true },
    family: { type: String, required: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
    email: { type: String },
    nationalID: { type: String, required: true },
    phonenumber: { type: String, required: true },
    role: { type: String, required: true },
  },
  { collection: "patients", timestamps: true }
);

const Patient = models.Patient || model<IPatientDoc>("Patient", patientSchema);
export default Patient;
