import { useState, useEffect } from "react";

const useFetch = () => {

    const [data, setData] = useState(null);

    const [error,setError] = useState(null)
    const [isPending, setIsPending] = useState(true);
    useEffect(() => {
    

        setTimeout(()=> {
        fetch("https://jsonplaceholder.typicode.com/posts")
        .then(res => {
         if(!res.ok){
           throw Error ("could not fetch the data for the resources")
         }
         return res.json();
         
 
        })
        .then(data => {
         setData(data);
         setIsPending(false)
         setError(null)
       })
       .catch(err => {
         setIsPending(false);
         setError(err.message)
       })
        
        }, 1000)
         
     }, [] )

     return{data, isPending,error}
 
}

export default useFetch