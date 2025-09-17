import { useState } from "react"
function Bike(){
    const [color,setColor]=useState('Red')
    const [brand,setBrand]=useState('Tvs')
    const [model,setModel]=useState('Xl')
    const [price,setPrice]=useState('1500')
    return(
        <>
        <h1>Bike Specs</h1>
        <p>Color:{color}</p>
        <p>Brand:{brand}</p>
        <p>Model:{model}</p>
        <p>Price:{price}</p>
        </>
    )
}
export default Bike