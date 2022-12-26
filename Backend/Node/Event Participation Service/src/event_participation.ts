import mongoose from "mongoose";
import  mongoosePaginate from "mongoose-paginate";

let eventpartSchema=new mongoose.Schema({
    id_event:{type:String,required:true},
    student_name:{type:String,required:true}
});

eventpartSchema.plugin(mongoosePaginate);
const Participation = mongoose.model("event_participation",eventpartSchema);

export default Participation;


