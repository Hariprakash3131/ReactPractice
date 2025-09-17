import { useState } from "react"
function Counter(){
    const [plus,setPlus]=useState(null)

    function count(){
        setPlus(plus=>plus+1)
    }

    return(
        <>
        <h1>Counter:{plus}</h1>
        <button onClick={count}>Count</button>
        </>
    )
}
export default Counter