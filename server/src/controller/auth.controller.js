import { User } from '../models/User.js'
import bcrypt from 'bcryptjs'
import generateTokenAndSetCookie from '../utils/generateToken.js';
import jwt from "jsonwebtoken";
import { config } from '../config/config.js';

export const signup = async (req,res) =>{
    
    try {
        
        const { userName, email, password, confirmPassword } = req.body;

        if(password !== confirmPassword){
            return res.status(400).json({
                error:"Passwords do not match"
            })
        }

        const user = await User.findOne({ userName });

        if(user){
            return res.status(400).json({
                error: "Username already exist"
            })
        }

        const salt = await bcrypt.genSalt(10);
        const hashedPassword = await bcrypt.hash(password,salt);

        const newUser = new User({
            userName,
            email,
            password: hashedPassword
        })

        if(newUser){
            generateTokenAndSetCookie(newUser._id,res);
            await newUser.save();

            res.status(201).json({
                _id: newUser._id,
                email: newUser.email,
                userName: newUser.userName,
            })
        }
        else{
            res.status(400).json({
                message: error.message
            })
        }

    } catch (error) {
        console.log("Error in Signup controller");
        res.status(500).json({
            error:`Internal Server Error, ${error.message}`,
        })
    }

}

export const login = async (req,res) =>{
    try {
        const { email, password } = req.body;
        const user = await User.findOne({email});
        const isPasswordCorrect = await bcrypt.compare(password,user?.password || "");

        if (!user || !isPasswordCorrect){
            return res.status(400).json({
                error: "Invalid Username or Password"
            })
        }
        
        generateTokenAndSetCookie(user._id,res);

        res.status(201).json({
                _id: user._id,
                fullName: user.fullName,
                userName: user.userName,
                profilePic: user.profilePic
            });

    } catch (error) {
        console.log("Error in Login controller");
        res.status(500).json({
            error:`Internal Server Error, ${error.message}`,
        })
    }
}

export const logout = async (req,res) =>{
    try {
        res.clearCookie('jwt-token',"",{maxAge:0})
        res.status(200).json({
                success:true,
                message:"Logout Successful"
            })
    } catch (error) {
        console.log("Error in logout Controller", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
}
export const authCheck = async (req,res)=>{
    try {
        res.status(200).json({
            success:true,
            user:req.user
        })
    } catch (error) {
        console.log("Error in authCheck Controller", error.message);
        res.status(500).json({
            success:false,
            message:"Internal Server Error"
        })
    }
};