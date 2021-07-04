import react from "react" ;
import data from "./data.js"
export default function DisplayAll(){
    return <div class="displayAll"><h1>DISPLAY WHOLE DATA</h1>
        {data.map(item=><div class="displayAll" key={item.id}>id:{item.id} name:{item.name} user_type:{item.user_type}</div>)}
    </div>
}