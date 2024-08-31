import axios from "axios"

const URL = "http://localhost:8000"

export const signIn = async (data) => {
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