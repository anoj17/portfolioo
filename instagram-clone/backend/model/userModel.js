import mongoose from "mongoose";


const userSchema = mongoose.Schema({
    fname: {
        type: String,
        required: true
    },
    lname: {
        type: String,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    email: {
        type: String,
        required: true,
        unique: true
    },
    profile: {
        type: String,
    },
},
    {timestamps: true}
);

const User = mongoose.model("user", userSchema)

export default User