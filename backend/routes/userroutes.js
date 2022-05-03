const express=require("express");
const {getUsers,createUsers,updateUsers,deleteUsers,loginUsers } = require("../controllers/usercontroller");

const router=express.Router();

router.route("/users/:id").get(getUsers); 
router.route("/users/new").post(createUsers);
router.route("/users/login").post(loginUsers);    
router.route("/users/:id").put(updateUsers).delete(deleteUsers);
module.exports=router;