import React from "react";
import useAuth from "../../hooks/useAuth";

const NotFound = () => {
    const {auth} = useAuth()
    console.log(auth)
    
    return(
        <>
            <h1>Not Found 404</h1>
        </>
        
        
    )

}

export default NotFound