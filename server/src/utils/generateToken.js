import jwt from "jsonwebtoken";
import config from "../config/config.js";

const generateTokenAndSetCookie = async (userId,res) => {
    const token = await jwt.sign({userId},config.JWT_SECRET,{
        expiresIn: '15d'
    })

    res.cookie("jwt-token",token,{
        maxAge: 15*24*60*60*1000,
        httpOnly: true,
        sameSite: strict,
        secure: config.NODE_ENV !== "development"
    })
}

export default generateTokenAndSetCookie;