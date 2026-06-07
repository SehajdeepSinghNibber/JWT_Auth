import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName:{
        type: String,
        required: true,
    },
    email:{
        type: String,
        required: true,
        unique: true,
        match: [/^\S+@\S+\.\S+$/, "Please enter a valid email"],
        trim: true
    },
    password:{
        type: String,
        required: true,
        minlength: 6
    },
    confirmPassword:{
        type: String,
        required: true,
        minlength: 6
    }
})

const User = mongoose.model("User",userSchema);

export default User;