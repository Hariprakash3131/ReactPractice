import { useEffect,useState } from "react"
function Timer(){
     const [count,setCount]=useState(0)
    useEffect(()=>{
        console.log("Rendering")
        //checkOut()
        //setCount(1)
        setTimeout(()=>{
            setCount((previousState)=>{return previousState+1})
        },1000)
        if (count>10){
            setCount(1)
        }
    })

    function updateCounter(){
        setCount((previousState)=>{return previousState+1})
    }

    function checkOut(){
        if(count>10){
            setCount(1)
        }
    }
    return(
        <>
        <h1>Increasing The {count}</h1>
        <button onClick={updateCounter}>Increase</button>
        </>
    )
}
export default Timer