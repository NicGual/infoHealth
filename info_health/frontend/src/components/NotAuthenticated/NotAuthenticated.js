import { useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import useRefresh from "../../hooks/useRefresh";
import LoadingSpinner from "../LoadingSpinner/LoadingSpinner";

const NotAuthenticated = () => {
    const {auth} = useAuth();
    const refresh = useRefresh();
    const [loading, setLoading] = useState(true);
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    useEffect(async () => {

        let isMounted = true;
        const logOutError = () =>{throw Error('user already logged out')}
        try { 

            if (auth.LoggedOut){logOutError();} 
            await refresh();
            setIsAuthenticated(true); 
                      
        } catch (error) {
            console.log(error);
            setLoading(false);            
        }finally{
            isMounted && setLoading(false);
        }
        return () => isMounted = false;
    }, [])
    console.log(auth)
    return(
        !isAuthenticated ? loading ? <LoadingSpinner/>:<Outlet/>  : <Navigate to="/menu"/>               
    )

}

export default NotAuthenticated