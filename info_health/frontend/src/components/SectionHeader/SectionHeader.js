import React from "react";
import './SectionHeader.css'

const SectionHeader = ({MainText='',children}) => {
    return (
        <>
            <div className="section-header d-flex justify-content-between text-white mt-4 mb-3">
                <h2 className="ms-3">{MainText}</h2>
                {children}
            </div>

        </>
    )
}

export default SectionHeader