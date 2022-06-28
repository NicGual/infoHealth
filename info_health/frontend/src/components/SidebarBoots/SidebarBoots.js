import React, { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import IconSelector from "../../utils/IconSelector";
import {FaBars} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import useLogout from "../../hooks/useLogout";

const SidebarBoots = (props) => { 
   
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const logout = useLogout();
    const navigate = useNavigate();
    const logOut = async () =>{
        await logout();
        // window.localStorage.removeItem('loggedUser')
        // window.localStorage.removeItem('isAuthenticated')
        // window.localStorage.removeItem('userData')
        // window.localStorage.removeItem('sidebarData')
        // navigate('../signin') 
    }
    
    return (
        <>  
            <div className='navbar'>
                <FaBars className='menu-bars ' onClick={showSidebar} />
            </div>
            <div className="flex-shrink-0 p-3 bg-white" style={{ width: '300px' }}>
                
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    

                    <ul className="list-unstyled ps-0 nav-menu-items">
                    
                        <li className='nav-bar-toggle'>
                            <Link to={window.location} className='menu-bars'>
                                <AiOutlineClose onClick={showSidebar} />
                            </Link>
                        </li>
                        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                            <span className="fs-5 fw-semibold">Menu</span>
                        </a>
                        {
                            props.SidebarData.map((item, index) => {

                                return (
                                    <>
                                        
                                        {item.adding ? (
                                            <>
                                                <button className="btn btn-toggle d-flex align-items-start rounded collapsed  " data-bs-toggle="collapse"
                                                    data-bs-target={'#' + item.iName + '-collapse'} aria-expanded="false">
                                                    <Link to={item.path} className={item.adding && ('disabled-link')} >
                                                        <i>{IconSelector(item.icon) }</i>
                                                        <span>{item.tittle}</span>
                                                    </Link>
                                                </button>
                                                <div className={!sidebar ? "collapsed" : "collapse"} id={item.iName + "-collapse"}>
                                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

                                                        {item.adding.map((element,elementIndex) => (
                                                            <li key={elementIndex} className={item.cName} onClick={showSidebar}>
                                                                <Link to={element[1]} >
                                                                    <span key={element[0]}>{element[0]}</span>
                                                                </Link>
                                                            </li>

                                                        ))}


                                                    </ul>
                                                </div>
                                            </>
                                        ) : (
                                            <button className="btn btn-toggle d-flex align-items-start rounded collapsed  " data-bs-toggle="collapse"
                                                data-bs-target={'#' + item.iName + '-collapse'} aria-expanded="false" onClick={showSidebar}>
                                                <Link to={item.path} className={item.adding && ('disabled-link')} >
                                                    <i>{IconSelector(item.icon)}</i>
                                                    <span>{item.tittle}</span>
                                                </Link>
                                            </button>
                                        )}
                                    </>
                                );
                            }
                            )
                        }

                        <li className="border-top my-3"></li>
                        <li className="mb-1">
                            <button className="btn btn-toggle align-items-center rounded collapsed" onClick={logOut}>
                                Log out
                            </button>
                        </li>
                    </ul>
                </nav>
            </div>
        </>
    )
};

export default SidebarBoots