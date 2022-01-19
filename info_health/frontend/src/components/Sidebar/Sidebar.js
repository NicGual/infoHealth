import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import { Link } from 'react-router-dom'
import { SidebarData } from './SidebarData';
import { IoMdHeartEmpty } from 'react-icons/io';
const Sidebar = () => {
    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to='/' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items'>
                    <li className='nav-bar-toggle'>
                        <Link to='/' className='menu-bars'>
                            <AiIcons.AiOutlineClose onClick={showSidebar} />
                        </Link>
                    </li>
                    {SidebarData.map((item, index) => {
                        return (
                            <>
                                <li key={index} className={item.cName} onClick={showSidebar}>
                                    <Link to={item.path}>
                                        <i >{item.icon}</i>
                                        <span>{item.tittle}</span>
                                    </Link>
                                </li>
                                {item.adding && item.adding.map((element) => (
                                    <li key={index} className={item.cName} onClick={showSidebar}>
                                        <Link to={element[1]} >
                                            <span key={element[0]}>{element[0]}</span>
                                        </Link>
                                    </li>

                                ))}

                            </>
                        );
                    })}
                </ul>

            </nav>
        </>

    )

};

export default Sidebar