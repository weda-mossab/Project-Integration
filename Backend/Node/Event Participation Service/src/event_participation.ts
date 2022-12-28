import mongoose from "mongoose";
import { User } from "./user";
const { Schema } = mongoose;


let eventSchema=new Schema({
    _id:String,
    description: String,
    participents: Map<String, User>
});



const Participation = mongoose.model("event",eventSchema);

export default Participation;


