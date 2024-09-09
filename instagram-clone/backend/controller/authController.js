import dotenv from 'dotenv'
import { v2 as cloudinary } from 'cloudinary';
import User from '../model/userModel.js'
import bcryptjs from 'bcryptjs'
import {generateToken} from '../middleware/jwtToken.js'

dotenv.config()

cloudinary.config({
    cloud_name: 'dwmysdgoo',
    api_key: '735782391563281',
    api_secret: 'wFmQxNdwHRgwSpk8jWrTyQ98y8A'
});

export const userRegister = async (req, res) => {
    const { fname, lname, password, email, profile } = req.body?.data
    // console.log(req.body)

    try {
        if (!fname || !lname || !password || !email) {
            return res.status(400).json({ message: "please fill the input field", alert: false })
        }

        const existUser = await User.findOne({ email })

        const hashPassword = bcryptjs.hashSync(password, 10)

        if (existUser) {
            return res.status(400).json({ message: "user already exist!", alert: false })
        }
        console.log(fname, lname)

        let profileUrl = '';
        if (profile) {
            const uploadRes = await cloudinary.uploader.upload(profile, {
                upload_preset: "image_preset",
                folder: "images",
            });
            profileUrl = uploadRes.url
            console.log(uploadRes)

        }

        const user = new User({
            fname,
            lname,
            profile: profileUrl || "https://cdn-icons-png.freepik.com/512/266/266033.png",
            email,
            password: hashPassword,
        })
        // console.log(token)
         
        await user.save()
        return res.status(201).json({ message: "user successfully registered!", alert: true })

    } catch (error) {
        console.log("Error during register", error)
        return res.status(400).json({ message: "something went wrong when registered!", error, alert: false })
    }
}

export const loginUser = async (req, res) => {
    const { email, password } = req.body
    console.log(req.body)

    try {
        const user = await User.findOne({ email })

        const comparePassword = bcryptjs.compareSync(password, user?.password)
        console.log(comparePassword)

        const payload = {
            id: user._id,
            email: user.email 
        }

        const token = generateToken(payload)
        console.log(token)

        if (user) {
            if (comparePassword) {
                const data = {
                    fname: user.fname,
                    lname: user.lname,
                    id: user._id,
                    email: user.email,
                    profile: user.profile,
                    token: token
                }
                return res.status(201).json({ message: "user login successfully", alert: true, data })
            }
            else {
                return res.status(400).json({ message: "Invalid email or password", alert: false })
            }
        }
        else {
            return res.status(400).json({ message: "User doesn't exist", alert: false })
        }
    } catch (error) {
        console.log(error)
        return res.status(400).json({ message: "error while login user", error, alert: false })
    }
}