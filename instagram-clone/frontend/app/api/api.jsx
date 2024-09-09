import axios from "axios"

const URL = process.env.NEXT_PUBLIC_URL

export const signUp = async (data) => {
    try {
        console.log(data)
        return await axios.post(`${URL}/api/user/signup`, data,)
        // {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // }

    } catch (error) {
        console.log("backend error", error)
    }
}

export const login = async (data) => {
    try {
        // console.log(data)
        return await axios.post(`${URL}/api/user`, data,)
        // {
        //     headers: {
        //         "Content-Type": "multipart/form-data"
        //     }
        // }

    } catch (error) {
        console.log("backend error", error)
    }
}

export const allUsers = async () => {
    try{
        return await axios.get(`${URL}/api/user/alluser`)
    }
    catch(error){
        console.log(error)
    }
}