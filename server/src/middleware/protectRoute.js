import jwt from "jsonwebtoken"
import User from "../models/user.model.js"
import config from "../config/config.js"

export const protectRoute = async (req,res,next) => {
    try {
        const token = req.cookies["jwt-token"]

        if(!token){
            return res.status(401).json({
                success:false,
                message:"unauthorized user, no token found!!"
            })
        }

        let decoded;

        try {
            decoded = jwt.verify(token, config.JWT_SECRET)
        } catch (error) {
            return res.status(401).json({
                success:false,
                message:"unauthorized user, invalid token!!"
            })
        }

        if(!decoded){
            return res.status(401).json({
                success:false,
                message:"unauthorized user, invalid token!!"
            })
        }

        const user = await User.findById(decoded.userId).select("-password")

        if(!user){
            return res.status(401).json({
                success:false,
                message:"user not found"
            })
        }

        req.user = user;

        next();

    } catch (error) {
        console.log(error.message);
        res.status(500).json({
            success:false,
            message:"Internal server error"
        })
    }
}