import { axiosProtect } from "../utils/AxiosInstance";
import useRefresh from "./useRefresh";
import useAuth from "./useAuth";
import useLogout from "./useLogout"
import { useEffect } from "react";

const useAxiosProtect = () => {
    const {auth, setAuth} = useAuth();
    const refresh = useRefresh();
    const logOut = useLogout();

    useEffect(() => {
        const requestIntercept = axiosProtect.interceptors.request.use(
            config => {
                if (!config.headers['Authorization']) {
                    config.headers['Authorization'] = auth.userToken //Bearer ${auth.userToken}
                }
                return config
            }, (error) => Promise.reject(error)
        );
        const responseIntercept = axiosProtect.interceptors.response.use(
            response => response,
            async (error) => {
                const prevRequest = error?.config;
                if (error?.response?.status === 403 && !prevRequest.sent){
                    prevRequest.sent = true;
                    try {
                        const newAccessToken = await refresh();                        
                        prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                        return axiosProtect(prevRequest);

                    } catch(err) {
                        console.log(err);
                    }
                    
                }

                if (error?.response?.status === (403 || 401) && prevRequest.sent) {
                    setAuth(prev => {return{...prev,modalWindow: true}});
                }
                return Promise.reject(error);
            }
        );
        return () => {
            axiosProtect.interceptors.request.eject(requestIntercept);
            axiosProtect.interceptors.response.eject(responseIntercept);
        }
    },[auth, refresh])

    return axiosProtect
}

export default useAxiosProtect