import { useContext } from "react"
import { LoginContext } from "../Contexts/LoginContext"

export default function Login() {
   const {
      username,
      setUsername,
      setShowProfile,
      password,
      setPassword,
      nickName,
      setNickName,
      selectedDate,
      setSelectedDate,
   } = useContext(LoginContext)

   const handleDateChange = (e) => {
      const inputDate = new Date(e.target.value)
      // Adjust the date to account for the time zone offset
      const adjustedDate = new Date(
         inputDate.getUTCFullYear(),
         inputDate.getUTCMonth(),
         inputDate.getUTCDate()
      )
      setSelectedDate(adjustedDate)
   }

   return (
      <>
         <input
            className="inputs"
            type="text"
            // value={username}
            placeholder="Username..."
            onChange={(e) => setUsername(e.target.value)}
            required
         />
         <br></br>
         <br></br>
         <input
            className="inputs"
            type="text"
            placeholder="Password..."
            onChange={(e) => setPassword(e.target.value)}
            required
         />
         <br></br>
         <br></br>
         <input
            className="inputs"
            type="text"
            placeholder="NickName..."
            onChange={(e) => setNickName(e.target.value)}
            required
         />
         <br></br>
         <br></br>
         <input
            className="inputsDate"
            type="date"
            placeholder="NickName..."
            value={selectedDate.toISOString().split("T")[0]}
            onChange={handleDateChange}
            required
         />
         <br></br>
         <br></br>
         <br></br>
         <button
            className="buttons"
            onClick={() => {
               // Check if all required fields have a value
               if (username && password && nickName && selectedDate) {
                  setShowProfile(true)
               } else {
                  alert("Please fill in all required fields.")
               }
            }}
         >
            Login
         </button>
      </>
   )
}
