import React, {useState} from "react";
import Login from "./Login";
import Signin from "./Signin";

export default function Log_Sign() {
  const [wantsLogIn, setWantsLogIn] = useState(true)

  return (
    <>
     {
     wantsLogIn?
     <Login wantsLogIn={wantsLogIn} setWantsLogIn={setWantsLogIn} />
     : <Signin wantsLogIn={wantsLogIn} setWantsLogIn={setWantsLogIn} />
          
     } 

    </>






  )
}
