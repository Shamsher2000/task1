const jwt=require('jsonwebtoken')
const maxage=3*24*60*60;
const generateToken=(id)=>{
    return jwt.sign({id},process.env.JWT_SECRET,{
        expiresIn:maxage
    })
}
module.exports=generateToken;