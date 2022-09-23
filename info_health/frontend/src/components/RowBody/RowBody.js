import React from "react";
import './RowBody.css'

const RowBody = ({size="large", children}) => {
   const rowSize = "row-body-"+size
    return (
        <>
            <div className={`${rowSize} row d-flex align-items-center  ms-2 mt-2 me-2 mb-4`}>
                {children}
            </div>

        </>
    )
}

export default RowBody