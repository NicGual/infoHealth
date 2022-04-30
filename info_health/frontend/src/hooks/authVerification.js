import axios from "axios"
import AuthContext from "../context/AuthProvider"
function authVerification() {

    const url = '';
    const {data} = Axios.post(url,{});
    if (data.isAuthenticated) {
        
    }

}
export default authVerification