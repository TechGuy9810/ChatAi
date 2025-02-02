import React from 'react'
import { useForm} from "react-hook-form"
import { SignIn } from '@clerk/clerk-react'
const Login = () => {
      
  return (
    <div className="w-full h-screen flex flex-row justify-center items-center bg-slate-800" >
    <SignIn path="/sign-in" signUpUrl='/sign-up' />
  </div>
      )
}

export default Login
