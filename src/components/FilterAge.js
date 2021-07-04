import react from "react"
import data from "./data.js"
function FilterAge(){
    const result=data.filter(item=>item.age>28 && item.age<=50)
    return <div><h1>FILTER BASED ON AGE</h1>
    {result.map(item=><div key={item.id}>id:{item.id} name:{item.name} user_type:{item.user_type}</div>)}</div>
}
export default FilterAge;