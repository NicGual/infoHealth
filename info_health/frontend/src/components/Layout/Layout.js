import React, {useEffect} from "react";
import { Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SidebarBoots from "../SidebarBoots/SidebarBoots";
//const jwt = require('jsonwebtoken')
const Layout = () =>{
    
    const {auth, setAuth} = useAuth();

    useEffect(() => {
        try{
            const isAuthenticated = Boolean(JSON.parse(window.localStorage.getItem('isAuthenticated')));
            const userData = JSON.parse(window.localStorage.getItem('userData'));
            //userData.isAuthenticated = isAuthenticated; 
            if (userData.role === 'patient' || userData.role === 'Paciente') {
                userData.role = ['2001']
            }else{
                userData.role = [userData.role];
            }            
            setAuth(prev =>{
                return {...prev,userData,isAuthenticated}});
            console.log(auth)
            
        }
        catch (error) {
            console.log(error)
        }
    },[auth.isAuthenticated])

    
    return(
        <div>
            {auth.isAuthenticated ? <SidebarBoots SidebarData={auth.sidebarData}/> : ""}
            <Outlet/>
         
        </div>
    );
}

export default Layout
