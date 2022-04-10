import React, { useState, useEffect } from "react";
import { AiOutlineMail, AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai'
import { ExternalLink } from 'react-external-link'


export default function Login({wantsLogIn,setWantsLogIn}) {

    const [showPassword, setShowPassword] = useState(false)

    const [emailValue, setEmailValue] = useState('')
    const [passwordValue, setPasswordValue] = useState('')

    const [isValidEmail, setIsValidEmail] = useState(true)
    const [isPasswordShort, setIsPasswordShort] = useState(false)

    // React.useEffect(() => {
    //     console.log(passwordValue)
    // }, [passwordValue])

    useEffect(() => {
        let timeout = setTimeout(() => {
            setIsValidEmail(true)
        }, 1500);
        return () => clearTimeout(timeout)
    }, [isValidEmail])

    useEffect(() => {
        let timeout = setTimeout(() => {
            setIsPasswordShort(false)
        }, 1500);
        return () => clearTimeout(timeout)
    }, [isPasswordShort])

    const handleSubmit = (e) => {
        e.preventDefault()

        // EMAIL VALIDATION
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if (re.test(emailValue)) {
            console.log('valid email')
        }
        else {
            console.log('email not valid!')
            setIsValidEmail(false)
        }

        if (passwordValue.length <= 4) {
            setIsPasswordShort(true)
        }
        else if (passwordValue.length > 10) {

        }

        console.log('submited')
    }

    return <main className="font-body flex justify-center flex-col md:flex-row items-center   h-screen w-screen bg-gray-200">
        {/*Image  */}
        <div
            style={{ backgroundImage: `url(https://pixabay.com/get/g031d791a78458f88a077efabcd6ab1ce48a6ca7d686865c90bc0326796cb30e4175f69a5ad6276fb9f315820bb051fb1.jpg)`, backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundSize: 'cover' }}
            className="relative hidden md:flex flex-col justify-center items-center  w-4/5 h-48 md:w-2/5 md:h-5/6  bg-black">
            <div className="absolute w-full h-full bg-black opacity-40 ">
            </div>
            <h1 className="absolute text-lg  z-10 top-4 left-8">LOGO</h1>
            <h2 className="z-10 text-6xl w-2/3 font-extrabold  text-white ">IT'S ALL ABOUT YOU.</h2>

        </div>
        <div className="flex flex-col justify-start items-center w-5/6 h-5/6  md:w-2/5 md:h-5/6 bg-white ">
            {/* Pick one */}
            <div className="flex flex-col justify-center gap-2 mt-5  items-center w-3/6 md:w-3/6 h-20">
                <div className="w-full flex gap-6 md:gap-2 justify-evenly">
                    <button onClick={() => setWantsLogIn(true)}>Log-in</button>
                    <button onClick={() => setWantsLogIn(false)}>Sing-up</button>
                </div>
                <div className="w-40 md:w-5/6 h-1 flex justify-start items-center rounded-full bg-slate-400">
                    <div className={`h-full w-1/2 bg-blue-600 rounded-full shadow-md shadow-blue-600 ${wantsLogIn ? "-translate-x-0 ease-in-out duration-500" : "translate-x-full ease-in-out duration-500"}`}>

                    </div>
                </div>
            </div>

            {/* Input Form */}
            <form onSubmit={handleSubmit} className="w-2/3 h-3/4 flex flex-col justify-center gap-6 items-center ">
                <div className=" md:w-72 w-11/12   h-2/4 flex flex-col  justify-center gap-8 items-center ">
                    <div className="relative w-full h-1/4 ">
                        <input
                            autoComplete="off"
                            required='required'
                            value={emailValue}
                            onChange={(e) => setEmailValue(e.target.value)}
                            name='email'
                            type="text"
                            id="email"
                            placeholder="Enter your e-mail"
                            className="w-full h-full  md:text-lg rounded-lg px-2 outline-none bg-gray-200 " />

                        {emailValue ? "" : <span className="absolute top-2 md:top-2 lg:top-3 right-2 text-gray-400 text-3xl"><AiOutlineMail /></span>}
                        {isValidEmail ? ""
                            : <span className="text-red-800 "> Email is not valid.</span>
                        }

                    </div>

                    <div className="relative w-full h-1/4">
                        <input
                            required="required"
                            maxLength={10}
                            value={passwordValue}
                            onChange={(e) => setPasswordValue(e.target.value)}
                            type={showPassword ? 'text' : 'password'}
                            name=""
                            id=""
                            placeholder="Password"
                            className="w-full h-full md:text-lg rounded-lg px-2 outline-none bg-gray-200 " />

                        <span
                            className="absolute cursor-pointer top-2 md:top-2 lg:top-3 right-2 text-gray-400 text-3xl"
                            onClick={() => setShowPassword(!showPassword)}
                        >{showPassword ? <AiOutlineEye /> : <AiOutlineEyeInvisible />}</span>
                        {isPasswordShort ? <span className="text-red-800 ">Password is too short.</span>
                            : ""
                        }
                    </div>

                </div>

                <div>
                    <p className="text-blue-800 cursor-pointer text-sm text-center gap-2">Forgot password?</p>
                    <div className="flex md:w-64  gap-2 text-sm">
                        <p>Dont't have an account? </p>
                        <span className="text-blue-900 cursor-pointer  border-black">Make one.</span>
                    </div>
                </div>

                <button type="submit" className="w-4/5 h-12 bg-blue-800 rounded-xl text-2xl capitalize  text-white">LOGIN</button>
            </form>


        </div>
    </main>;
}
