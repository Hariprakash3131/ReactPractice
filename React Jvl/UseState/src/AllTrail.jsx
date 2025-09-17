import { useState } from "react"
function Trail(){
    const [store,setStore]=useState(
        {
        stored:"Person Details",
    }
)

    
    const [person,setPerson]=useState(
        {
            name:"James",
            age:"20",
            phone:'6382947727',
            email:"james@gmail.com"
        }

      

    )

    function updatePerson()
     {
        setStore(oldState=>{
            return {...oldState,stored:"James Details"}
        })
    }
    
    return(
        <>
         <h1>{store.stored}</h1>
         <p>Name:{person.name}</p>
         <p>Age:{person.age}</p>
         <p>Phone:{person.phone}</p>
         <p>Email:{person.email}</p>
         <button onClick={updatePerson}>Button</button>
        </>
    )
}
export default Trail