const mongoose=require("mongoose");

const connectdatabase=()=>{
    mongoose.connect(process.env.DB_URI,{useNewUrlParser: true,useUnifiedTopology : true}).then((data)=>{
        console.log("datbases connected succesfully");
    }).catch((err)=>{
        console.log(err);
    });
}
module.exports=connectdatabase;