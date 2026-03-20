import '../models/connection.js';
import Userschemamodel from '../models/User.js';



// export const save=(req,res,next)=>{
//     //for display body parameters
//     console.log(req.body);
//     res.send("test");
// }

export const save=async (req,res,next)=>{
    var userlist=await Userschemamodel.find().sort({_id:-1});
    var _id=userlist.length==0?1:userlist[0]._id+1;
    var userDetails={...req.body,"_id":_id ,"role":"student", "info":Date()};
    try{
        var user=await Userschemamodel.create(userDetails);
        res.status(201).json({"status":true});
    } catch (error) {

        console.log(error);
        res.status(500).json({"status":false});
    }
}