import type { NextPage } from 'next'
import React from 'react'
import LogIn from '../components/LogIn'
const Home: NextPage = () => {
  const [wantsLogIn, setWantsLogIn] = React.useState(true)

  return (
    <main className="font-body flex h-screen w-screen flex-col items-center   justify-center bg-gray-200 md:flex-row">
      <div
        style={{
          backgroundImage: `url(https://pixabay.com/get/g031d791a78458f88a077efabcd6ab1ce48a6ca7d686865c90bc0326796cb30e4175f69a5ad6276fb9f315820bb051fb1.jpg)`,
          backgroundPosition: 'center',
          backgroundRepeat: 'no-repeat',
          backgroundSize: 'cover',
        }}
        className="relative hidden h-48 w-4/5 flex-col items-center  justify-center bg-black md:flex md:h-5/6  md:w-2/5"
      >
        <div className="absolute h-full w-full bg-black opacity-40 "></div>
        <h1 className="absolute top-4  left-8 z-10 text-lg">LOGO</h1>
        <h2 className="z-10 w-2/3 text-6xl font-extrabold  text-white ">
          IT'S ALL ABOUT YOU.
        </h2>
      </div>
      <div className="flex h-5/6 w-5/6 flex-col items-center justify-start  bg-white md:h-5/6 md:w-2/5 ">
        <div className="mt-5 flex h-20 w-3/6 flex-col items-center justify-center gap-2 md:w-3/6">
          <div className="flex w-full flex-col items-center justify-evenly gap-6 md:gap-2">
            <div className="flex w-full">
              <button
                className="w-3/6"
                onClick={(curr: any) => setWantsLogIn(curr)}
              >
                Log-in
              </button>
              <button
                className="w-3/6"
                onClick={(curr) => setWantsLogIn(!curr)}
              >
                Sign-up
              </button>
            </div>
            <div className="flex h-1 w-full items-center justify-start rounded-full bg-slate-400">
              <div
                className={`h-full w-1/2 rounded-full bg-blue-600 shadow-md shadow-blue-600 ${
                  wantsLogIn
                    ? '-translate-x-0 duration-500 ease-in-out'
                    : 'translate-x-full duration-500 ease-in-out'
                }`}
              ></div>
            </div>
          </div>
        </div>
        {wantsLogIn ? <LogIn /> : <LogIn />}
      </div>
    </main>
  )
}

export default Home
