import React, {useEffect, useState} from "react";
import useAxiosProtect from "../../hooks/useAxiosProtect";

const EditUser = () => {
    const [users,setUsers] = useState([]);
    const AxiosProtect = useAxiosProtect();
    useEffect(() => {
        const getUsers = async ()=> {
            const url = '/api/users';       
            const usersList = await AxiosProtect.get(url,{withCredentials: true});
            setUsers(usersList.data); 
            console.log(usersList.data);      
        };
        getUsers();
    },[])
    return(
        <>
            <h1>Editar Usuario</h1>
            <ul>
                {users?.map((user, i) => <li key={i}>{user?.name}
                <button> eliminar</button>
                </li>)} 
            </ul>
        </> 
    )
}
export default EditUser