import { useEffect, useState } from "react"
import { useQuery } from "react-query";

const useHook =()=>{

    const {data: parts, isLoading} = useQuery('parts', ()=> fetch('https://dry-sea-91165.herokuapp.com/parts').then(res => res.json()))

    
    
    return [parts, isLoading];
}
export default useHook;