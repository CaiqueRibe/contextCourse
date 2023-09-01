import "./App.css"

import { useState } from "react"
import Profile from "./components/Profile"
import Login from "./components/Login"
import { LoginContext } from "./Contexts/LoginContext"

function App() {
   const [username, setUsername] = useState("")
   const [password, setPassword] = useState("")
   const [nickName, setNickName] = useState("")
   const [selectedDate, setSelectedDate] = useState(new Date())
   const [showProfile, setShowProfile] = useState(false)

   return (
      <div className="App">
         <h1>Context Example Pedro Crash Course</h1>
         <LoginContext.Provider
            value={{
               username,
               setUsername,
               password,
               setPassword,
               nickName,
               setNickName,
               selectedDate,
               setSelectedDate,
               setShowProfile,
            }}
         >
            {showProfile ? <Profile /> : <Login />}
         </LoginContext.Provider>
      </div>
   )
}

export default App
