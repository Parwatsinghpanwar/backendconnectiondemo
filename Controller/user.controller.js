import { json } from 'stream/consumers';
import '../models/connection.js';
import Userschemamodel from '../models/User.js';
import url from "url";



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

export const fetch=async (req,res,next)=>{
var userlist=await Userschemamodel.find();
if(userlist.length>0){
    res.status(200).json({"status":true,"data":userlist});
}
else   res.status(404).json({"status":false,"message":"no data found"});
}

export const fetchuser=async (req,res,next)=>{
    
    var conditionobj=url.parse(req.url,true).query ;
      
    var userlist=await Userschemamodel.findOne(conditionobj);
    if(userlist.length>0){
        res.status(200).json({"status":true,"data":userlist});
    }
    else   res.status(404).json({"status":false,"message":"no data found"});

}
 export const deleteuser = async (req, res, next) => {
    try {
        const conditionobj = req.query;

        const result = await Userschemamodel.deleteOne(conditionobj);

        if (result.deletedCount > 0) {
            res.status(200).json({
                status: true,
                message: "User deleted successfully"
            });
        } else {
            res.status(404).json({
                status: false,
                message: "No data found"
            });
        }

    } catch (error) {
        console.error(error);
        res.status(500).json({
            status: false,
            message: "Server error"
        });
    }

};
// export const updateuser = async (req, res, next) => {
//     try {
//         const conditionobj = req.query;
//         const updateData = req.body;

//         const result = await Userschemamodel.updateOne(conditionobj, updateData);

//         if (result.modifiedCount > 0) {
//             res.status(200).json({
//                 status: true,
//                 message: "User updated successfully"
//             });
//         } else {
//             res.status(404).json({
//                 status: false,
//                 message: "No data found"
//             });
//         }

//     } catch (error) {
//         console.error(error);
//         res.status(500).json({
//             status: false,
//             message: "Server error"
//         });
//     }

// }

export const updateuser=async(req,res,next)=>{
 var conditionobj=json.parse(req.body.conditionobj);
 let userDetails=await Userschemamodel.findOne(conditionobj);
 if(userDetails.length!=0)
 {
    let user=await  Userschemamodel.updateOne(conditionobj,{$set:json.parse(res.body.content_obj)});
    if(user)
    {
        res.status(200).json({
                status: true,
                message: "User update successfully"})
    }
    else {
            res.status(404).json({
                status: false,
                message: "No data found"
            });

    }}
    
        else {
            res.status(404).json({
                status: false,
                message: "No recode found"
            });
    }

}
//for the login process to dependets jsonweb token (jwt) fist install depenedy 
// npm install jsonwebtoken
//npm install randomstring 
// since methods to create a token since methods resive fist in unique velue is second is randomstring 
//
