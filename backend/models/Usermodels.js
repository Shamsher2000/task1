const bcrypt = require ('bcryptjs');
const res = require('express/lib/response');
const { cookie } = require('express/lib/response');
const mongoose=require("mongoose");
const generateJWT=require('../utils/generateJWTtokens')
const Userschema=new mongoose.Schema({

    name:{
        type:String,
        required:[true,"please enter your name"],
        trim:true
    },
    email:{
        type:String,
        required:[true,"please enter emailid"]
    },
    contact:{
        type:Number,
        required:[true,"Enter the 10 digit number"],
        maxlength:10
    },
    password:{
        type:String,
        required:[true,"Enter the password"]
    },
    tokens:[{
        token:{
            type:String,
            required:true
        }
    }
    ],
        createdAt:{
            type:Date,
            default:Date.now
        }
});
Userschema.pre('save',async function(next){
    if (!this.isModified('password')) next();
    const salt=await bcrypt.genSalt(10);
    this.password=await bcrypt.hash(this.password,salt);
})

module.exports=mongoose.model("User",Userschema);