import {FaEnvelopeOpenText,FaBars, FaUsers, FaFileUpload} from 'react-icons/fa';
import {AiOutlineClose} from 'react-icons/ai';
import {RiHealthBookFill, RiFileSearchFill, RiBarChart2Fill, RiMicroscopeFill, RiFileEditFill} from 'react-icons/ri';
import {IoIosPaper} from 'react-icons/io';
import {GoGraph} from 'react-icons/go';
import {IoMdHelpCircle} from 'react-icons/io';
import {MdDateRange} from 'react-icons/md';

function IconSelector (icon)  {
    const iconOptions = {
        //all users icons
        FaBars: <FaBars/>,
        AiOutlineClose: <AiOutlineClose/>,
        RiBarChart2Fill: <RiBarChart2Fill/>,

        //patient icons
        RiHealthBookFill: <RiHealthBookFill/>,
        IoIosPaper: <IoIosPaper/>,
        GoGraph: <GoGraph/>,
        FaEnvelopeOpenText: <FaEnvelopeOpenText/>,                
        IoMdHelpCircle: <IoMdHelpCircle/>,

        //laboratorist icons
        FaFileUpload: <FaFileUpload/>,
        RiFileEditFill: <RiFileEditFill/>,

        //doctor icons
        RiMicroscopeFill: <RiMicroscopeFill/>,
        RiFileSearchFill: <RiFileSearchFill/>,
        FaFileUpload: <FaFileUpload/>,

        // admin icons
        MdDateRange: <MdDateRange/>,
        FaUsers: <FaUsers/>,
        
    }
    const selectedIcon = iconOptions[icon]
    return selectedIcon
}


export default IconSelector;