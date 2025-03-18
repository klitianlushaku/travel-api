import User from "../users/user.model.js";
import bcrypt from "bcrypt";
import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRETKEY

export const login = async (req, res) =>{
    try{
        const { email, password } =req.body;
        const user = await User.findOne({email} );

            if (!user) {
                return res.status(401).json({ message: "Invalid Creditinals" });
              }
              const isMatch = await bcrypt.compare(password, user.password);
              if (!isMatch) {
                return res.status(401).json({ message: "Invalid Creditinals" });
              }
              const playload = {
                id: user._id,
                role:user.role
              };

              const token = jwt.sign(playload, secretKey, {expiresIn: "8h"});
              res.status(200).json({token})    
        }catch(error){
               
            res.status(500).json({message:"Server Error", error});    

        }
}