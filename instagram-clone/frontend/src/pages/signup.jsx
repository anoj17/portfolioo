import { useState } from "react"
import { useMutation } from "react-query"
import toast from "react-hot-toast"
import { useDispatch } from "react-redux"
import { Link } from "react-router-dom"
import { PageRoute } from "../enum/routes.enum"
import { signIn } from "../api/api"
import { signInRedux } from "../redux/authSlice"

const Signup = () => {

    // const router = useRouter()

    const dispatch = useDispatch()

    const [data, setData] = useState({
        fname: "",
        lname: "",
        email: "",
        password: "",
    })

    const { mutate } = useMutation(['login'], signIn, {
        onSuccess: res => {
            toast(res?.data.message)
            if (res?.data.alert) {
                // router.push("/")
                dispatch(signInRedux(res?.data))
                // console.log(res.data)
            }
        },
        onError: error => {
            console.log(error)
        }
    })

    const [profile, setProfile] = useState('')

    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value })
        // console.log(data)
    }

    const clickImage = (e) => {
        const reader = new FileReader()
        reader.readAsDataURL(e.target.files[0])
    
        reader.onload = () => {
          const result = reader.result
          setProfile(result)
          setData((prev) => {
            return {
              ...prev,
              profile: result
            }
          })
        }
      }

    const submitData = (e) => {
   const {fname, lname, password, email} = data
        // if(!fname || !lname || !password || email){
        //     toast("please fill all input field")
        // }
        e.preventDefault()
        console.log(data, profile)
        mutate({data, profile})
    }

    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <form onSubmit={submitData} className="flex flex-col space-y-3 px-16 py-7 bg-white rounded-xl shadow drop-shadow-md">
                <h1 className="text-center text-lg font-medium">Sign Up</h1>
                <div className='flex flex-col'>
                    <label htmlFor="fname">First Name</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"

                        type="text"
                        name="fname"
                        value={data.fname}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="lname">Last Name</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        type="text"
                        name="lname"
                        value={data.lname}
                        onChange={handleChange}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="email">Email</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        onChange={handleChange}
                        type="email"
                        name="email"
                        value={data.email}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="password">Password</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        onChange={handleChange}
                        type="password"
                        name="password"
                        value={data.password}
                    />
                </div>

                <div className='flex flex-col'>
                    <label htmlFor="image">Profile Image</label>
                    <input className="py-2 px-3 w-[400px] border shadow-md"
                        onChange={clickImage}
                        type="file"
                        name="profile"
                    />
                </div>

                <button className='text-white bg-blue-600 text-center w-full py-2 rounded-md' type="submit">SignUp</button>
                <h1 className="text-center">Already have an account?<Link to={PageRoute.LOGIN} className='text-blue-800 font-bold cursor-pointer'>Login</Link></h1>
            </form>
        </main>
    )
}

export default Signup