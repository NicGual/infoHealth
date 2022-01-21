import React from "react";
import Cookies from "universal-cookie";
import SidebarBoots from "../SidebarBoots/SidebarBoots";

const cookies = new Cookies();
const Layout = ({children}) =>{

    const verification = () =>{
        if(cookies.get('name')) {
            console.log('verification')
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
