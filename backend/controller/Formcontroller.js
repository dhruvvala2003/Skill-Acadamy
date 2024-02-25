// Example in Formcontroller.js
import UserModel from '../models/Usermodel.js';


const setUser = async (req, res) => {
    const { email, uname, pwd, conpwd} = req.body;

    const user = await UserModel.findOne({ email });
    if (user) {
        const data = {'mes' : "User already Exist"};
        return res.send(data);
      }
    if(req.body.pwd != req.body.conpwd){
        const data = {'mes' : 'Password and confirm password not match.'};
        res.send(data);
    }
    else{
        try {
            
            const data =  new UserModel();
           
            data.email = req.body.email; 
            data.password = req.body.pwd;
            data.user_name = req.body.uname;
              
            data.save();
            const data1 = {'flag' : null};
            res.send(data1);
        }
        catch(error){
            console.error(error);
        }
    }
}

const getUser = async (req, res) => {
    try {
        const cards = await UserModel.find({});
        res.status(200).json(cards);
    } catch (error) {
        console.error("Error getting cards:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const lastseen = async(req, res, next) => {
    if (req.user) {
      // Update the last seen timestamp in the database
      User.findByIdAndUpdate(req.user._id, { lastSeen: new Date() }, { new: true })
        .then(() => next())
        .catch(err => console.error(err));
    } else {
      next();
    }
};

const deleteuser =async (req, res) => {
    const {userId} = req.body;

    try {
        const deletion = await UserModel.deleteOne({_id: userId});
        console.log(deletion);
        if (deletion.deletedCount > 0) {
            res.status(200).json({ message: "User deleted successfully" });
        } else {
            res.status(404).json({ message: "User not found" });
        }
        //res.send("user data geting deleted...");
    } catch (error) {
        console.log("Error deleting user:", error);
        res.status(500).json({ error: "Internal Server Error" });
    }
};

const Formcontroller = {
    setUser,
    getUser,
    lastseen,
    deleteuser,
};
export default Formcontroller