import React from "react";
import useLogout from "../../hooks/useLogout";
import { Outlet } from "react-router-dom";

const ModalWindow2 = ({children}) => {
    const logOut = useLogout();
    return (
        <>
            <div className="modal d-block bg-dark bg-gradient"  tabindex="-1" role="dialog">
                <div className="modal-dialog modal-dialog-centered" role="document">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title">Su sesion ha expirado</h5>
                            <button onClick={logOut} type="button" className="btn-close" data-dismiss="modal" aria-label="Close"/>
                        </div>
                        <div className="modal-body">
                            {children}
                            
                        </div>                       
                    </div>
                </div>
            </div>
        </>
    )

}

export default ModalWindow2;