import react from "react"
import data from "./data.js"
function UserType(){
    const result=data.filter(item=>item.user_type==="Designer")
    return <div><h1>BASED ON USERTYPE</h1>{result.map(item=><div  key={item.id}>id:{item.id} name:{item.name} user_type:{item.user_type}</div>)}
        </div>
}
export default UserType