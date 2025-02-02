import { SignUp } from '@clerk/clerk-react'
import React from 'react'
const Signup = () => {
    // const { handleSubmit, register, formState: { errors, isSubmitting } } = useForm();
    // const onSubmit = values => console.log(values);
        
    return (
      <div className="w-full h-screen flex flex-row justify-center items-center bg-slate-800 " >
      {/* <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-1/5" onSubmit={handleSubmit(onSubmit)}>
      <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="name" type="text" placeholder="John"
                  {...register("name", {
                    required: "Required",
                    maxLength:{value:15,message: "Maximum length of can be 15"},minLength:{value:3,message: "Atleast Enter 2 characters"}
                  })}
          />
          
          <p class="text-red-500 text-xs italic">{errors.name && errors.name.message}</p>
        </div>
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
            Email
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="email" type="email" placeholder="John@gmail.com"
                  {...register("email", {
                    required: "Required",
                    pattern: {
                      value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                      message: "invalid email address"
                    }
                  })}
          />
          
          <p class="text-red-500 text-xs italic">{errors.email && errors.email.message}</p>
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="ConfirmPassword">
           Confirm Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="ConfirmPassword" type="password" placeholder="************"
          {...register("ConfirmPassword", { required: "Required", maxLength:{value:15,message: "Maximum length of can be 15"},minLength:{value:3,message: "Atleast Enter 3 characters"}})}
          />
           <p class="text-red-500 text-xs italic">{errors.ConfirmPassword && errors.ConfirmPassword.message}</p>
          
        </div>
        <div className="mb-6">
          <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="password">
            Password
          </label>
          <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline" id="password" type="password" placeholder="************"
          {...register("password", { required: "Required", maxLength:{value:15,message: "Maximum length of can be 15"},minLength:{value:3,message: "Atleast Enter 3 characters"}})}
          />
           <p class="text-red-500 text-xs italic">{errors.password && errors.password.message}</p>
          
        </div>
        <div className="flex flex-col items-center justify-between">
          <input className='bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline w-full cursor-pointer' type='submit' disabled={isSubmitting} value={isSubmitting ? "Submiting" : "Submit"}/>
          <a className="inline-block align-baseline font-semibold text-sm text-blue-500 hover:text-blue-800 underline pt-2 cursor-pointer">
            Already have an account?
          </a>
        </div>
      </form> */}
<SignUp path="/sign-up" signInUrl='/sign-in' />
    </div>
        )
}

export default Signup;