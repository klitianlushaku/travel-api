import jwt from "jsonwebtoken";
import dotenv from "dotenv";

dotenv.config();

const secretKey = process.env.SECRETKEY;

export const isAuthenticated = (req, res, next) =>{

   const authHeader = req.headers.authorization;

   if(!authHeader){
    return res.status(401).json({message: "Access denied, no token denied"});
   }
  
   const token = authHeader.split(" ")[1];
try{
    
const decode = jwt.verify(token, secretKey);

req.user = decode;
next();

}catch(error){

  res.status(401).json({message: "Invalid Token"});
  
}


}

