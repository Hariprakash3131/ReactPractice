import { useState } from "react"
function Forms(){
    const [input,setInput]=useState({phone:"+91",email:"@gmail.com"})

    function submitForm(e) 
    {
        e.preventDefault()
        console.log("Form Submitted")
        console.log(input)
    }
     
    function handleChange(e){
        const name=e.target.name
        const value=e.target.value
        setInput((previousState)=>{
            return{...previousState,[name] : value}
        })
    }

    return(
        <>
        <h1>Forms</h1>

        <form onSubmit={submitForm}>
            <label for="">Enter the Name:<input type="text" name="name" onChange={handleChange} /></label><br/>
            <label for="">Enter the Age: <input type="text"  name="age" onChange={handleChange} /></label><br/>
            <label for="">Enter the Email: <input type="text" name="email" onChange={handleChange}value={input.email}/></label><br/>
            <label for="">Enter the Phone: <input type="text"name="phone" onChange={handleChange} value={input.phone}/></label>
            <input type="submit" value="Submit Form"/>
        </form>
        </>
    )
}
export default Forms