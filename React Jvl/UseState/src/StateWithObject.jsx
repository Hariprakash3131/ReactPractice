import { useState } from "react"
function BikeSpec(){
    const [bike,setBike]=useState({
        color:"Red",
        brand:"Tvs",
        model:"Xl",
        price:"20000"
    })
    // updating state with object
    function updateColor() {    
        setBike(privousState => {
            return {...privousState,color:"Blue"}
        })
    }

    console.log("Current State",bike)
    return(
        <>
         <h1>Bike Specs</h1>
        <p>Color:{bike.color}</p>
        <p>Brand:{bike.brand}</p>
        <p>Model:{bike.model}</p>
        <p>Price:{bike.price}</p>
        <button onClick={updateColor}>Update The Color</button>
        </>
    )
}
export default BikeSpec