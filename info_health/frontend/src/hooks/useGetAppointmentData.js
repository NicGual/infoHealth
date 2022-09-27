import Axios from '../utils/AxiosInstance';
import useAuth from '../hooks/useAuth';
import useAxiosProtect from "../hooks/useAxiosProtect";

const useGetAppointmentData = () =>{
    const {auth} = useAuth();
    const AxiosProtect = useAxiosProtect();
    const getAppointmentData = async (data) => {
        try{
            
            const response = await AxiosProtect.get('/api/appointments', {
                params: data,
                withCredentials: true
            });
            return response.data
        }
        catch(e){
            console.log(e)
        }
    }
    return getAppointmentData
}
export default useGetAppointmentData