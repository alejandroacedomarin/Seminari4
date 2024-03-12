import { Schema, model } from "mongoose";

export interface ILoc {
    id: number;
    
    name: string;
    loc: string
}


const LocSchema = new Schema<ILoc>({
  id: { type: Number, required: true, unique: true },
  loc: { type: String , required: true, unique: false },
  name: { type: String , required: true, unique: false}
  
});

export const LocModel =  model("Localitation", LocSchema); 