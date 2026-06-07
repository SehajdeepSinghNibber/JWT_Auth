import dotenv from 'dotenv';

dotenv.config();

if (!process.env.MONGO_URI){
    throw new Error("MONGO URI is not defined in environment variable");
}

const config = {
    JWT_SECRET: process.env.JWT_SECRET,
    PORT: process.env.PORT,
    NODE_ENV: process.env.NODE_ENV,
    MONGO_URI: process.env.MONGO_URI
}

export default config;