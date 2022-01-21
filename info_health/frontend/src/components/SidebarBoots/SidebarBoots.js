import React, { useState } from "react";
import { Link } from 'react-router-dom'
import Cookies from "universal-cookie";
import { SidebarBootsData as SidebarData } from './SidebarBootsData'
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
const SidebarBoots = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    const cookies = new Cookies();
    const logOut = () =>{
        cookies.remove('_id', {path:"/"});
        cookies.remove('name', {path:"/"});
        cookies.remove('email', {path:"/"});
        cookies.remove('password', {path:"/"});
        cookies.remove('usertype', {path:"/"});
        window.location.href='./login'
    }
    
    return (
        <>
            <div className='navbar'>
                <FaIcons.FaBars className='menu-bars ' onClick={showSidebar} />
            </div>
            <div className="flex-shrink-0 p-3 bg-white" style={{ width: '300px' }}>
                
                <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                    

                    <ul className="list-unstyled ps-0 nav-menu-items">
                    
                        <li className='nav-bar-toggle'>
                            <Link to={window.location} className='menu-bars'>
                                <AiIcons.AiOutlineClose onClick={showSidebar} />
                            </Link>
                        </li>
                        <a href="/" className="d-flex align-items-center pb-3 mb-3 link-dark text-decoration-none border-bottom">
                            <span className="fs-5 fw-semibold">Menu</span>
                        </a>
                        {
                            SidebarData.map((item, index) => {

                                return (
                                    <>
                                        
                                        {item.adding ? (
                                            <>
                                                <button className="btn btn-toggle align-items-center rounded collapsed  " data-bs-toggle="collapse"
                                                    data-bs-target={'#' + item.iName + '-collapse'} aria-expanded="false">
                                                    <Link to={item.path} className={item.adding && ('disabled-link')} >
                                                        <i>{item.icon}</i>
                                                        <span>{item.tittle}</span>
                                                    </Link>
                                                </button>
                                                <div className={!sidebar ? "collapsed" : "collapse"} id={item.iName + "-collapse"}>
                                                    <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">

                                                        {item.adding.map((element) => (
                                                            <li key={index} className={item.cName} onClick={showSidebar}>
                                                                <Link to={element[1]} >
                                                                    <span key={element[0]}>{element[0]}</span>
                                                                </Link>
                                                            </li>

                                                        ))}


                                                    </ul>
                                                </div>
                                            </>
                                        ) : (
                                            <button className="btn btn-toggle align-items-center rounded collapsed  " data-bs-toggle="collapse"
                                                data-bs-target={'#' + item.iName + '-collapse'} aria-expanded="false" onClick={showSidebar}>
                                                <Link to={item.path} className={item.adding && ('disabled-link')} >
                                                    <i>{item.icon}</i>
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
                            <button className="btn btn-toggle align-items-center rounded collapsed" data-bs-toggle="collapse" data-bs-target="#account-collapse" aria-expanded="false">
                                Account
                            </button>
                            <div className="collapse" id="account-collapse">
                                <ul className="btn-toggle-nav list-unstyled fw-normal pb-1 small">
                                    <li><a href="#" className="link-dark rounded">New...</a></li>
                                    <li><a href="#" className="link-dark rounded">Profile</a></li>
                                    <li><a href="#" className="link-dark rounded">Settings</a></li>
                                    <li><a href="#" className="link-dark rounded">Sign out</a></li>
                                </ul>
                            </div>
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