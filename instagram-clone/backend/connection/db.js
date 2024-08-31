import mongoose from "mongoose";

const Connection = async () => {
    try{
      await mongoose.connect(process.env.MONGOOSE_URL)
      console.log("Database connect successfully!!!")
    }catch(error){
        console.log("database connection failed!!")
    }
}

export default Connection