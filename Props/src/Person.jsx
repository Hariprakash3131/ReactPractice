import Props from "./Props"
function Person(props){
    return(
         <>
         <div>
            <h1>{props.name}</h1>
            <h1>{props.age}</h1>
            <h1>{props.number}</h1>
         </div>
         </>
    )
}
export default Person