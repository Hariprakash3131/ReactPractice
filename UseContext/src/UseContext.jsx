import { createContext,useContext } from "react"
const Person=createContext();
function Child(){
    const user=useContext(Person);
    return  <h1>Hello,{user}</h1>
}
   
function UseContext(){
    return(
        <Person.Provider value="Hari">
            <Child/>
        </Person.Provider>
       
    )
}
export default UseContext