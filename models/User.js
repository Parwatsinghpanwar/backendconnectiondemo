//Here we create user schema/table
import mongoose, { Types } from "mongoose";
import uniquevalodator from "mongoose-unique-validator";

const Userschema=mongoose.Schema({

    _id:Number,
    name:{
        type:String,
        required:[true,"name is required"],
        lowercase:true,
        trim:true
    },
    mobile:{
        type:String,
        required:[true,"mobile number is required"],
        maxlength:10,
        trim:true,
        minlength:10,
    },
    email:{
        type:String,
        required:[true,"email is required"],
        trim:true,
        lowercase:true,
        unique:true
    },
    password:{
        type:String,
        required:[true,"password is required"],
        trim:true,
        minlength:5,
        maxlength:20,
        lowercase:true
    },
    role:String,
    status:Number,
    info:String
});
//for applying unique validator plugin to user schema
Userschema.plugin(uniquevalodator);

//compileing user schema to model
const Userschemamodel=mongoose.model("User_collection1",Userschema);
export default Userschemamodel;