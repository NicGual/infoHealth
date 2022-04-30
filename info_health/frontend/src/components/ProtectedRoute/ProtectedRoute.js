import { useLocation, Navigate, Outlet } from "react-router-dom";
import useAuth from "../../hooks/useAuth";

const ProtectedRoute = ({allowedRoles}) => {
    const {auth} = useAuth();
    const location = useLocation();
    // useLayoutEffect(() => {
    //     try{
    //         const isAuthenticated = JSON.parse(window.localStorage.getItem('isAuthenticated'));
    //         const userData = JSON.parse(window.localStorage.getItem('userData'));
    //         userData.isAuthenticated = isAuthenticated;
    //         setAuth({userData, isAuthenticated});
    //         console.log(auth)
    //         // const isTrue = isAuthenticated === 'true';
    //         // isTrue ? setAuth() : setAuth(auth.isAuthenticated = 'true')
    //     }
    //     catch (error) {
    //         console.log(error)
    //     }
    // },[auth.isAuthenticated])

    console.log(auth)
    return(
        auth?.userData?.role?.find(role => allowedRoles?.includes(role))
            ? <Outlet/>
            : auth.userData
                ? <Navigate to="/no-autorizado" state={{from: location}} replace />
                : <Navigate to="/signin" state={{from: location}} replace />  
        // auth?.userData 
        //     ? <Outlet/> :  <Navigate to='/signin' state={{from: location}} replace/>

    )

}

export default ProtectedRoute