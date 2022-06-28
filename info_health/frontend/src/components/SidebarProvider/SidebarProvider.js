import React from 'react';
import { Outlet } from "react-router-dom";
import useAuth from '../../hooks/useAuth';
import SidebarBoots from '../SidebarBoots/SidebarBoots';

const SidebarProvider = () => {
    const {auth} = useAuth();

    return(
        <>
            <SidebarBoots SidebarData={auth.sidebarData}/>
            <Outlet/>

        </>
    )
}

export default SidebarProvider;