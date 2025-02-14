import { useState } from "react";
import { Eye,EyeClosed } from "lucide-react";

const SignIn = () => {
    const [password, setPassword] = useState(true);

    function handleClick(){
        setPassword(!password)
    }

  return (
    <div className="mt-10 flex items-center justify-center mx-3 md:mx-0">
        <div className="flex flex-col items-center justify-center border-2 rounded-2xl p-8 md:p-12 border-amber-700">
            <h1 className="text-3xl">Sign In to Enjoy <span className="bg-gradient-to-r from-orange-500 to-red-700 text-transparent bg-clip-text">VirtualR</span> </h1>
            <form action="" className="text-center flex flex-col gap-3 mt-5">
                <div className="border-[1px] border-amber-200 rounded-2xl p-2">
                    <label htmlFor="name">Name:</label>
                    <input placeholder="Enter Your Name" type="text" id="name" className="mx-3 outline-none" />
                </div>
                <div className="border-[1px] border-amber-200 rounded-2xl p-2">
                    <label htmlFor="email">Email:</label>
                    <input placeholder="Enter Your Email" type="email" id="email" className="mx-3 outline-none" />
                </div>
                <div className="border-[1px] border-amber-200 rounded-2xl p-2 flex">
                    <div> 
                        <label htmlFor="password">Password:</label>
                        <input placeholder="Enter Your Password" type={password ? "password" : "text"} id="password" className="mx-3 outline-none" />
                    </div>
                    <div className="">
                    {
                        password ? <Eye onClick={handleClick}/> : <EyeClosed onClick={handleClick}/>
                    }
                    </div>
                </div>
                <div className="border-[1px] border-amber-400 rounded-2xl p-2 transition hover:bg-amber-800 duration-200"><button type="submit">Sign In</button></div>
            </form>
        </div>
    </div>
  )
}

export default SignIn