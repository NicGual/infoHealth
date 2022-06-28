import React, {useEffect, useState} from "react";
import { Outlet, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import SidebarBoots from "../SidebarBoots/SidebarBoots";
import useRefresh from "../../hooks/useRefresh";

const Layout = () =>{
    
    const [loading, setLoading] = useState(true);
    const {auth, setAuth} = useAuth();
    const refresh = useRefresh();
    const navigate = useNavigate();
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
                //se tedria que usar useLogout para desaparecer cookies y variable local  storage 
                
            }
            finally{
                isMounted && setLoading(false);
            }
        }

        auth.userToken? setLoading(false) : verifyLogin();
        console.log(auth);
        return isMounted = false;

    },[]);

    


    
    return(
        <div>
            
            {auth.isAuthenticated ? <Outlet/> : loading ? <p>... Loading</p> : navigate('../signin')}
         
        </div>
    );
}

export default Layout
