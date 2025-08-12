import {useState,useCallback} from 'react';
import Child from './Child';
function UseCallback(){
    const [count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Clicked");
    },[])
    return(
        <div>
            <button onClick={()=>setCount(count+1)}>Count{count}</button>
            <Child  onClick={handleClick}/>
        </div>

    )
}
export default UseCallback