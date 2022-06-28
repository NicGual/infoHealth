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
                    const newAccessToken = await refresh();
                    //llega hasta aqui la ejecucion por que recibe un error 403 y lo muestra 
                    prevRequest.headers['Authorization'] = `Bearer ${newAccessToken}`;
                    return axiosProtect(prevRequest);
                }

                if (error?.response?.status === (403 || 401) && prevRequest.sent) {
                    console.log('se ejecuto esta vaina');
                    await logOut();


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