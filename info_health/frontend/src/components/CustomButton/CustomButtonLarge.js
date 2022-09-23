import React from "react";
import './CustomButtonLarge.css'

const CustomButtonLarge = ({action, placeholder}) => {
    return (
        
        <button className="custom-button d-flex align-items-center justify-content-center" onClick={action}>
            <div className="button-text-container text-center p-1 fw-semibold">
               {placeholder}
            </div>         
        </button>
        
    )
}
export default CustomButtonLarge