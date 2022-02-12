import React from 'react';
import * as FaIcons from 'react-icons/fa'
import * as IoIcons from 'react-icons/io'
import * as RiIcons from 'react-icons/ri'
import * as GoIcons from 'react-icons/go'

export const SidebarBootsData = [
    {
        tittle: 'Asignacion de Citas',
        path: '/',
        icon: <RiIcons.RiHealthBookFill/>,
        cName: 'list-group link-dark rounded',
        iName: 'asignacion',
        adding: [['Mediciana General','/medicina-general'],['Toma de laboratorio','/toma-laboratorio']]
        //adding:  { sub1: 'Medicina General',sub2:'toma de laboratorio'}
    },
    {
        tittle: 'Consulta de Resultados',
        path: '/resultados',
        icon: <IoIcons.IoIosPaper/>,
        cName: 'list-group link-dark rounded',
        iName: 'resultados',
        
        
    },
    {
        tittle: 'Estadisticas',
        path: '/estadisticas',
        icon: <GoIcons.GoGraph/>,
        cName: 'list-group link-dark rounded',
        iName: 'estadisticas'
    },
    {
        tittle: 'Ordenes Activas',
        path: '/ordenes',
        icon: <FaIcons.FaEnvelopeOpenText/>,
        cName: 'list-group link-dark rounded',
        iName: 'ordenes'
    },
    {
        tittle: 'Support',
        path: '/support',
        icon: <IoIcons.IoMdHelpCircle/>,
        cName: 'list-group link-dark rounded',
        iName: 'support'
    }
];