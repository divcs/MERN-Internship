import CourseModel from "../models/CourseModel.js";
import bcrypt from "bcryptjs";
const CourseRegister = async(req, res) =>{
 try{
    }catch(err)
    {
    console.log(err);
    return res.status(500).send({
        status:false,
        message:"Error in register callback",
        err,
    })
}
};
const CourseDisplay = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }
};
const CourseSearch = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }

};
const CourseDelete = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }
};
const CourseUpdate = async(req, res) =>{
    try{
   }catch(err)
    {
        console.log(err);
        return res.status(500).send({
            status:false,
            message: "Erron in Display All Users ",
            err
        })
    }
};
export default {
    CourseRegister,
    CourseDisplay,
    CourseSearch,
    CourseUpdate,
    CourseDelete,
}