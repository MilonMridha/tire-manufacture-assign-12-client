import { useEffect, useState } from "react"
import { useQuery } from "react-query";

const useHook =()=>{

    const {data: parts, isLoading} = useQuery('parts', ()=> fetch('http://localhost:5000/parts').then(res => res.json()))

    
    
    return [parts, isLoading];
}
export default useHook;