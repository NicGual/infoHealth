import React from "react";
import useRefresh from "../../hooks/useRefresh";

const Statistics = () => {
    

    return(
        <>
            <h1>Estadisticas</h1>
            <button onClick={useRefresh()}>refresh token</button>
            
        </> 
    )
}
export default Statistics