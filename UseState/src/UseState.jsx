import { useState } from "react"
function UseState(){
    const [count,setCount]=useState(0);
    function Counter(){
      
        setCount(count+1)
          console.log(count)

    }


    return(
        <div>
            <h1>{count}</h1>
           <button onClick={Counter} className="btn btn-primary">
                   Count
           </button>
        </div>
    )
}
export default UseState