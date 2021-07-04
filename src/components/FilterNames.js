import react from "react"
import data from "./data.js"
function FilterNames(){
    const result=data.filter(item=>item.name.startsWith("J"))
    return <div><h1>FILTER BASED ON NAMES</h1>
    {result.map(item=><div key={item.id}>id:{item.id} name:{item.name} user_type:{item.user_type}</div>)}</div>
}
export default FilterNames;