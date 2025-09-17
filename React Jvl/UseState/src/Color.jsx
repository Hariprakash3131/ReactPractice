import {  useState } from "react"
function FvrtColor(){
    const [fcolor,setFcolor]=useState('Blue');
    return(
        <>
        <h1>My Favorite Color{fcolor}</h1>
        <button onClick={()=> {setFcolor('Red')}}>Change The Color</button>
        </>
    )
}
export default FvrtColor