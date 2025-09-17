import './Api.css'
import React,{useEffect,useState} from "react"
function Api(){
    const [person,setPerson]=useState(null);
    useEffect(()=>{
        fetch('http://localhost:5000/person')
        .then((res)=>res.json())
        .then((data)=>setPerson(data))
        .catch((err)=>console.log(err))


    },[]);

    if (!person) {
      return <p>Loading...</p>
    }

    return(
        <>
        <div className="container">
      <div className="card" style={{ width: "18rem" }}>

  <img src={person.profile_image} className="card-img-top" alt="..."/>
  <div className="card-body">
   
    <p className="card-text">{person.name}</p>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item">{person.age}</li>
    <li className="list-group-item">{person.email}</li>
    <li className="list-group-item">{person.phone}</li>
  </ul>
  <div className="card-body">
    <a href={person.social_links.inkedin} className="card-link" target="_blank" rel="noopener noreferrer">Linkdin</a>
    <a href={person.social_links.github} className="card-link" target="_blank" rel="noopener noreferrer">GitHub</a>
  </div>
</div>
</div>
</>
    )
}
export default Api