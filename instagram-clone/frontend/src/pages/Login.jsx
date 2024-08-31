
import { useState } from "react";
import { useMutation } from "react-query";
import toast from "react-hot-toast"
import { login } from "../api/api";
import { Link } from "react-router-dom";
import { PageRoute } from "../enum/routes.enum";
import { useSelector } from "react-redux";

const Login = () => {
    const [showPwd, setShowPwd] = useState(false)
    const [data, setData] = useState({
        email: '',
        password: ''
    })

    const userDetails = useSelector((state) => state?.auth?.user?.data)

    // const router = useRouter()

    // console.log(userDetails?.profile)

    const handleChange = (e) => {
        const { name, value } = e.target

        setData({ ...data, [name]: value })
    }

    const { mutate } = useMutation(['signIn'], login, {
        onSuccess: res => {
            // console.log(res?.data)
            toast(res?.data?.message)
            if (res?.data?.alert == true) {
                // router.push('/home')
                console.log("successfullllllllllllll")
            }
        },
        onError: error => {
            console.log(error)
        }
    })

    const submitHandle = (e) => {
        e.preventDefault()
        mutate(data)
    }



    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form onSubmit={submitHandle} className="flex flex-col space-y-3 px-16 py-7 bg-white rounded-xl shadow drop-shadow-md">
                {
                    userDetails &&
                    <div className="flex justify-center items-center">
                        <img src={userDetails?.profile} className='h-11 w-11 rounded-full' />
                    </div>
                }
                <h1 className="text-center text-lg font-medium">Sign In</h1>

                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        type="email"
                        placeholder="abc@gmail.com"
                        name="email"
                        value={data.email}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <div className=" flex items-center">
                        <input className="py-2 px-3 w-[400px] border shadow-md"
                            type={!showPwd ? 'password' : "text"}
                            name="password"
                            value={data.password}
                            onChange={handleChange}
                        />
                    </div>
                </div>

                <button className='text-white bg-blue-600 text-center w-full py-2 rounded-md' type="submit">SignIn</button>
                <h1 className="text-center">Already have an account?<Link to={PageRoute.SIGNUP} className='text-blue-800 font-bold cursor-pointer'>SignUp</Link></h1>
            </form>
        </main>
    );
}

export default Login