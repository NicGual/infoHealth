import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as AiIcons from 'react-icons/ai'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as GoIcons from 'react-icons/go'

export const SidebarData = [
    {
        tittle: 'Asignacion de Citas',
        path: '/asignacion-de-citas',
        icon: <RiIcons.RiHealthBookFill/>,
        cName: 'nav-text',
        //adding: [['Mediciana General','/medicina-general'],['Toma de laboratorio','/toma-laboratorio']]
    },
    {
        tittle: 'Consulta de Resultados',
        path: '/resultados',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Estadisticas',
        path: '/estadisticas',
        icon: <GoIcons.GoGraph/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Ordenes Activas',
        path: '/ordenes',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'nav-text'
    },
    {
        tittle: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'nav-text'
    }
];