import { useState, useEffect } from "react";


export default function useFetch(url){
    const [data, setData] = useState(null);
    const [error, setError] = useState(null);

    useEffect(()=>{
        fetch(url)
            .then(res => res.json())
            .then(setData)
            .catch(setError)
    },[url])

    return {data,error};
}