import { useState } from "react"
function ColorChange(){
    const [changeColor,setChangeColor]=useState("Red")
    const [change,setChange]=useState(
        {
            changed:"Changing",
        },
    )

    function Header ()
    {
        setChange(p=>{
            return {...p,changed:"Update"}
        })
    }

    console.log("Current File",change)
    return(
        <>
        <h1>{change.changed} The Color {changeColor} </h1> <button onClick={Header}>Update</button>
        <button onClick={()=>{setChangeColor('Green')}}>Button</button>
        </>
    )
}
export default ColorChange