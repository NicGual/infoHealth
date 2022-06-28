import Axios from '../utils/AxiosInstance';
import useAuth from '../hooks/useAuth';
import { useNavigate } from 'react-router-dom';
const useLogout = () => {

    const { setAuth } = useAuth();
    const navigate = useNavigate();
    const logout = async () => {
        
        setAuth({});
        try {
            
            const response = Axios.get('/logout', { withCredentials: true });
            window.localStorage.removeItem('loggedUser')
            window.localStorage.removeItem('isAuthenticated')
            window.localStorage.removeItem('userData')
            window.localStorage.removeItem('sidebarData')
            navigate('../signin')
        } catch (error) {
            console.error(error);
        }
    }
    return logout;



}

export default useLogout;