import mongoose from "mongoose";
import dotenv from 'dotenv'

dotenv.config()

const Connection = async () => {
    try{
      await mongoose.connect(process.env.MONGOOSE_URL)
      console.log("Database connect successfully!!!")
    }catch(error){
        console.log("database connection failed!!",error)
    }
}

export default Connection