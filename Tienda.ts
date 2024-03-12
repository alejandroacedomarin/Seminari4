import {Schema, model } from "mongoose";

export interface ITienda {
    id: number;
    name: string;
    email: string;
    web: string;
    phone: string;
}

const TiendaSchema = new Schema <ITienda>({
  id: { type: Number, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true},
  web: { type: String, required: true},
  phone: {type: String, required : true}
  
});

export const TiendaModel =  model("Tiena", TiendaSchema); 
