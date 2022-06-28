import Axios from '../utils/AxiosInstance';
import useAuth from '../hooks/useAuth';

const useRefresh = () => {

    const endpoint = '/refresh';
    const { auth, setAuth } = useAuth();

    const refreshToken = async () => {
        //try {
            const response = await Axios.get(endpoint, { withCredentials: true });
            setAuth(prev => {
                console.log(JSON.stringify(prev));
                console.log(response.data.accessToken);
                return {
                    ...prev,
                    role: response.data.role,
                    isAuthenticated: response.data.isAuthenticated,
                    userData: response.data.userInfo,
                    userToken: 'Bearer ' + response.data.accessToken
                }
            });
            console.log(auth);

            return response.data.accessToken;
        // }
        // catch (err) {
        //     console.log(err);
        //     return response;
            

        // }

    }

    return refreshToken
}

export default useRefresh