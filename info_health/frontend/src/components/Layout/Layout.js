import React, {useEffect, useState} from "react";
import { Outlet, useNavigate, useLocation, Navigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
//import SidebarBoots from "../SidebarBoots/SidebarBoots";
import useRefresh from "../../hooks/useRefresh";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";
import ModalWindow from "../ModalWindow/ModalWindow";


const Layout = () =>{
    
    const [loading, setLoading] = useState(true);
    const [modal, setModal] = useState(false);
    const {auth, setAuth} = useAuth();
    const refresh = useRefresh();
    //const navigate = useNavigate();
    const location = useLocation();
    useEffect(() => {

        let isMounted = true;

        const verifyLogin = async () => {
            try {
                const sidebarData = JSON.parse(window.localStorage.getItem('sidebarData'));
                setAuth(prev =>{return {...prev,sidebarData}});
                await refresh();
                
            }
            catch(error){
                console.log(error);
                setLoading(false);  
            }
            finally{
                isMounted && setLoading(false);
            }
        }

        auth.userToken? setLoading(false) : verifyLogin();
        return () => isMounted = false;

    },[]);

    useEffect(() => {setModal(auth.modalWindow)},[auth.modalWindow])


    
    return(
        <div>
                        
            {auth.isAuthenticated ? <Outlet/> : loading ? <LoadingSpinner/>: <Navigate to="/signin" state={{from: location}} replace />}            
            {modal && <ModalWindow/>}
         
        </div>
    );
}

export default Layout
