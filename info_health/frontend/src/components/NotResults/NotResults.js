import React from "react";

const NotResults = () => {
    return (
        <>
            <div className="container">
                <div className="d-flex justify-content-center mt-4">
                    <img src="/sin-resultados.png" alt="sin resultados" />                   
                </div>
                <div className="not-found-text text-center mt-4">
                    <h3 className="fw-bold">No se encontraron resultados</h3>
                    <h4>intentelo mas tarde o cambie los parametros de busqueda</h4>
                </div>
                
            </div>

        </>
    )
}
export default NotResults