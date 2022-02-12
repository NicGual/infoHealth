import React from "react";
import SidebarBoots from "../SidebarBoots/SidebarBoots";
//const jwt = require('jsonwebtoken')
const Layout = ({children}) =>{

    const verification = () =>{

        /*
        const userToken = window.localStorage.getItem('loggedUser')
        jwt.verify(JSON.parse(userToken),'userKey', (error, authData) => {
            if(error){                
                alert(error)
            }
            if(authData){
                console.log(authData)
                return(authData)               
            }
        })
        */
        
        const userToken = window.localStorage.getItem('loggedUser')
        if(userToken) {
            
            return(<SidebarBoots/>)
            }
        
    }
    return(
        <div>
            {verification()}
            {children}
        </div>
    );
}

export default Layout
