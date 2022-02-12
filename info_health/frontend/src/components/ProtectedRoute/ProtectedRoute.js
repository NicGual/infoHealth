import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = () => {
    const {auth} = useAuth();
    const location = useLocation();

    return(
        auth?.userData 
            ? <Outlet/> :  <Navigate to='/signin' state={{from: location}} replace/>

    )

}

export default ProtectedRoute