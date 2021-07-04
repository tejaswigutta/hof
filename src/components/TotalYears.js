import react from "react"
import data from "./data.js"
function TotalYears(){
    const result=data.filter(item=>item.user_type=="Designer").map(item=>item.years)
    return <div><h1>TOTAL YEARS OF DESIGNERS</h1>{result.reduce((age,accumulator)=>age+accumulator)}</div>
}
export default TotalYears