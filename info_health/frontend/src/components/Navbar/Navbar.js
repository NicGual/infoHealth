import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa'
import { Link } from 'react-router-dom'
import SidebarBoots from '../SidebarBoots/SidebarBoots';

const Navbar = () => {

    const [sidebar, setSidebar] = useState(false);
    const showSidebar = () => setSidebar(!sidebar);
    return (
        <>
            <div className='navbar'>
                <Link to='/' className='menu-bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            
        </>

    )
}

export default Navbar