'use client'

import Link from "next/link";
import { useState } from "react";
import { useMutation } from "react-query";
import { useSelector } from "react-redux";
import { login } from "./api/api";
import toast from "react-hot-toast"
import { useRouter } from "next/navigation";
import { useDispatch } from "react-redux"
import { signInRedux } from "./redux/authSlice";

export default function Home() {
  const [showPwd, setShowPwd] = useState(false)
  const [data, setData] = useState({
    email: '',
    password: ''
  })

  const userDetails = useSelector((state: any) => state?.auth?.user?.data)

  const router = useRouter()

  const dispatch = useDispatch()

  // console.log(userDetails?.profile)

  const handleChange = (e: any) => {
    const { name, value } = e.target

    setData({ ...data, [name]: value })
  }

  const { mutate } = useMutation(['signIn'], login, {
    onSuccess: res => {
      console.log(res?.data)
      toast(res?.data?.message)
      if (res?.data.alert) {
        router.push("/home")
        dispatch(signInRedux(res?.data))
        console.log(res.data)
    }
    },
    onError: error => {
      console.log(error)
    }
  })

  const submitHandle = (e: any) => {
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
        <h1 className="text-center">Already have an account?<Link href='/signup' className='text-blue-800 font-bold cursor-pointer'>SignUp</Link></h1>
      </form>
    </main>
  );
}