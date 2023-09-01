import { useContext } from "react"
import { LoginContext } from "../Contexts/LoginContext"

export default function Profile() {
   const { username, password, nickName, selectedDate } =
      useContext(LoginContext)
   const formattedDate = `${selectedDate
      .getUTCDate()
      .toString()
      .padStart(2, "0")}/${(selectedDate.getUTCMonth() + 1)
      .toString()
      .padStart(2, "0")}/${selectedDate.getUTCFullYear()}`

   return (
      <>
         {/* <h1>Profile --&gt; {username}</h1> */}
         <h2>Passed on context</h2>
         <h2>
            UserName --{">"} {username} <br /> PassWord --{">"} {password}{" "}
            <br /> NickName --{">"} {nickName} <br /> DOB --{">"}{" "}
            {formattedDate}
         </h2>
      </>
   )
}
