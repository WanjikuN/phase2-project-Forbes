import {useState, useEffect} from "react"
import Dataitem from "./DataItem";
// useEffect(()=>{
    //logic 
// },[])
function Datatest(){
    const [companies, setCompanies] = useState([])
    
    useEffect(()=>{
        fetch('http://localhost:4000/companies')
        .then(response => response.json())
        .then(data => setCompanies(data));
    },[])
   console.log(companies)
    return(
        <>
          {companies.map(i=>{
                return <Dataitem key={i.id} name={i.name} networth={i.netWorth} employees={i.employees} />
          })}
            
        </>
    )
}
export default Datatest;