import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';
const ProtectRouting = ({Component}) => {
    const nav = useNavigate()
    useEffect(()=>{
        if(!sessionStorage.getItem("user")){
           nav("/");
        }
    },[])
    return (
        <div>
            <Component></Component>
        </div>
    )
}

export default ProtectRouting
