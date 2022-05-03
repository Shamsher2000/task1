const User=require("../models/Usermodels");
const generateJWT=require('../utils/generateJWTtokens')
const bcrypt=require('bcrypt');
const jwt=require('jsonwebtoken')


//create users
exports.createUsers=async (req,res,next)=>{
    const {name,email,contact,password}=req.body;
    const userexist= await User.findOne({email});
    if(userexist)
    {
        return res.status(400).json({msg:"user already exist with this email"});
    }
    const user=await User.create(req.body);
    if(user)
    {
    res.status(201).json({success:true,
        user,
    token:generateJWT(user._id)});
    }

}
exports.updateUsers= async (req,res,next)=>{
    let user=await User.findById(req.params.id);
    if(user)
    {
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    user=await User.findByIdAndUpdate(req.params.id,req.body,{
        new:true,
        runValidators:true.valueOf,
        useFindByModify:false
    });
    res.status(200).json({success:true,
        user});
};
exports.deleteUsers= async(req,res,next)=>{
    let user=await User.findById(req.params.id);
    if(!user)
    {
        return res.status(500).json({
            success:false,
            message:"product not found"
        })
    }
    await user.remove();
    res.status(201).json({success:true,
        message:"Product deleted succesfuly"})
};
 //login users
exports.loginUsers=async(req,res,next)=>{
    const {email,password}=req.body;
    const user= await User.findOne({email});
    if(!user)
    {
         return res.status(500).json({msg:"user does not exist"});
    }
     const ismatch=bcrypt.compareSync(password,user.password);
    if(user && ismatch)
    {
        res.status(200).json({success:true,
        email,token:generateJWT(user._id)});
    }
    else
    {
        res.status(400).json({msg:"wrong password"});
    }
    
}
// use token generated for the user to find the user details
exports.getUsers=async(req,res,next)=>{
    let result=jwt.decode(req.params.id);
    if(!result)
    {
        return res.status(500).json({
            success:false,
            message:"user not found"
        })
    }
    let users=await User.findById(result["id"])
    if(!users)
    {
        return res.status(500).json({
            success:false,
            message:"user not found"
        })
    }
    res.status(200).json({success:true,users})
}