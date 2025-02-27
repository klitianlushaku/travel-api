// we write functions that we want to do
import User from "./user.model.js"; // database of users
import bcrypt from "bcrypt"; // to hash the password

export const createUser = async (req, res) => {
  try {
    const { firstName, lastName, email, password, phoneNumber, role } =
      req.body;

    const hashedPassword = await bcrypt.hash(password, 10);

    const user = new User({
      firstName,
      lastName,
      email,
      password: hashedPassword,
      phoneNumber,
      role
    });
    await user.save();
    res.status(201).json(user);
  } catch (error) {
    console.log(error, "error");
    res.status(400).json({ message: error });
  }
};
export const getUsers = async (req, res) => {
    try{
         const users=await User.find()
                  res.status(200).json({ users });

    }catch(error){
               res.status(500).json({message:"server error"})
    }
}


export const getUsersById = async (req,res)=>{
    try{
        const userId = req.params.id
        const oneUser = await User.findById(userId)
    if(!oneUser){
        return res.status(404).json({message:"UserNot found"})
    }
    res.status(200).json(oneUser)

    }catch(error){
        res.status(500).json({message:"server error"})
    }

}

export const uptadeUser = async (req, res)=> {
    try{
        const userId = req.params.id;
        const { firstName, lastName, email, password, phoneNumber, role } = req.body;
        const user = await User.findById(userId);
        if(!user){
            return res.status(404).json({message:"User Not Found"});
        }
        if(firstName){
           user.firstName = firstName;
        }
        if(lastName){
            user.lastName = lastName;
         }
         if(email){
            user.email = email;
         }
         if(password){
            const hashedPassword = await bcrypt.hash(password, 10);
           user.password = hashedPassword;
        }
        if(phoneNumber){
            user.phoneNumber = phoneNumber;
         }
         if(role){
            user.role = role;
         }
         await user.save();
         res.status(202).json({message:"Uptaded"});
    }catch(error){
         res.status(500).json({message:"Server Error"});

    }
}

export const deleteUser = async (req, res)=> {
    try{
        const userId = req.params.id;
        await User.findByIdAndDelete(userId);
        res.status(200).json({message:"user deleted successfully"});


    }catch(error){
        res.status(500).json({message:"Server Error"});

    }
}