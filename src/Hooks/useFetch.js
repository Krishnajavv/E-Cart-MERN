
import { useState } from "react"
import { useEffect } from "react"

const useFetch=(url)=>{
    const [data,setData]=useState(null)

    useEffect(()=>{
       fetch(url).then(res=>{
        res.json().then(result=>{
            setData(result.products)

        })
       })
    },[url])
    return data



}
export default useFetch