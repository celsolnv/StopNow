import Cookies from "js-cookie";
import { useState, useEffect } from "react";

function usePersisteState(key:string,initialState:any){
    const [state, setState] = useState(initialState);
    useEffect(()=>{
        const storageValue = Cookies.get(key) ;
        console.log("cookie",Cookies);
        if (storageValue){
            setState(JSON.parse(storageValue));
        }else{
            setState(initialState);
        } 
    },[])
    useEffect(() => {
        Cookies.set(key,JSON.stringify(state));
    }, [state,key])

    return [state,setState];
}

export default usePersisteState;