import { useState } from "react"

function MyForms(){
    const [name,setName]=useState("")
    const [age,setAge]=useState(null)
    const [email,setEmail]=useState("")
    function handleSubmit(stopRender){
        stopRender.preventDefault()
        console.log("Forms Submited")
        console.log("Name:",name)
        console.log("Age:",age)
        console.log("Email:",email)
    }
    
    return(
        <>
        <h1>Forms</h1>
         <form onSubmit={handleSubmit}>                                             {/*use e or anything */}
            <label for="">Enter the Name: <input type="text" onChange={(getInput)=>{setName(getInput.target.value)}}/> </label> <br/>
            <label for="">Enter the Age: <input type="text" onChange={(getInput)=>{setAge(getInput.target.value)}}/></label>   <br/>
            <label for="">Enter the Email: <input type="email" onChange={(getInput)=>{setEmail(getInput.target.value)}}/></label> <br/>
            <input type="submit" value="Submit Form"/>
        </form>
        </>
    )
}
export default MyForms



