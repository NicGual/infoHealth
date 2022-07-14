import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import Unauthorized from "../Unauthorized/Unauthorized";

const ProtectedRoute = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
    
    console.log(auth)
    return(
        auth?.userData?.role?.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth.userData
                ? <Unauthorized/>
                : <Navigate to="/signin" state={{from: location}} replace />          
    )

}

export default ProtectedRoute