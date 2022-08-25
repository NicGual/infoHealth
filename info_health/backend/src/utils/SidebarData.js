const PatientSidebarData = [
    {
        tittle: 'Asignacion de Citas',
        path: '/asignacion-citas',
        icon: 'RiHealthBookFill',
        cName: 'list-group link-dark rounded',
        iName: 'asignacion',
        // adding: [['Mediciana General', '/medicina-general'], ['Toma de laboratorio', '/toma-laboratorio']]
    },
    {
        tittle: 'Consulta de Resultados',
        path: '/resultados',
        icon: 'IoIosPaper',
        cName: 'list-group link-dark rounded',
        iName: 'resultados'
    },
    {
        tittle: 'Estadisticas',
        path: '/estadisticas',
        icon: 'GoGraph',
        cName: 'list-group link-dark rounded',
        iName: 'estadisticas'
    },
    {
        tittle: 'Ordenes Activas',
        path: '/ordenes',
        icon: 'FaEnvelopeOpenText',
        cName: 'list-group link-dark rounded',
        iName: 'ordenes'
    },
    {
        tittle: 'Support',
        path: '/support',
        icon: 'IoMdHelpCircle',
        cName: 'list-group link-dark rounded',
        iName: 'support'
    }
];
const LabSidebarData = [
    {
        tittle: 'Subir resultados',
        path: '/subir-resultados',
        icon: 'FaFileUpload',
        cName: 'list-group link-dark rounded',
        iName: 'subir-resultados'
    },
    {
        tittle: 'Editar resultados',
        path: '/editar-resultados',
        icon: 'RiFileEditFill',
        cName: 'list-group link-dark rounded',
        iName: 'resultados'
    },
    {
        tittle: 'Buscar Pacientes',
        path: '/buscar-pacientes',
        icon: 'RiFileSearchFill',
        cName: 'list-group link-dark rounded',
        iName: 'buscar-pacientes'
    },
    {
        tittle: 'Estadisticas',
        path: '/estadisticas',
        icon: 'RiBarChart2Fill',
        cName: 'list-group link-dark rounded',
        iName: 'estadisticas'
    }
];
const DoctorSidebarData = [
    {
        tittle: 'Asignacion de Citas',
        path: '/asignacion-citas',
        icon: 'RiHealthBookFill',
        cName: 'list-group link-dark rounded',
        iName: 'asignacion'
    },
    {
        tittle: 'Toma de Laboratorio',
        path: '/toma-laboratorio',
        icon: 'RiMicroscopeFill',
        cName: 'list-group link-dark rounded',
        iName: 'toma-laboratorio',
    },
    {
        tittle: 'Agenda',
        path: '/agenda',
        icon: 'IoIosPaper',
        cName: 'list-group link-dark rounded',
        iName: 'agenda'
    },
    {
        tittle: 'Buscar Pacientes',
        path: '/buscar-pacientes',
        icon: 'RiFileSearchFill',
        cName: 'list-group link-dark rounded',
        iName: 'buscar-pacientes'
    },
    {
        tittle: 'Estadisticas',
        path: '/estadisticas',
        icon: 'RiBarChart2Fill',
        cName: 'list-group link-dark rounded',
        iName: 'estadisticas'
    }
];
const AdminSidebarData = [
    {
        tittle: 'Citas',
        path: '/',
        icon: 'MdDateRange',
        cName: 'list-group link-dark rounded',
        iName: 'citas',
        adding: [['Asignacion de Citas', '/asignacion-citas'], ['Editar Citas', '/editar-citas']]
    },
    {
        tittle: 'Usuarios',
        path: '/usuarios',
        icon: 'FaUsers',
        cName: 'list-group link-dark rounded',
        iName: 'usuarios',
        adding: [['Crear Usuario', '/crear-usuario'], ['Editar Usuario', '/editar-usuario']]
    },
    {
        tittle: 'Agenda',
        path: '/agenda',
        icon: 'IoIosPaper',
        cName: 'list-group link-dark rounded',
        iName: 'agenda'
    },
    {
        tittle: 'Buscar Pacientes',
        path: '/buscar-pacientes',
        icon: 'RiFileSearchFill',
        cName: 'list-group link-dark rounded',
        iName: 'ordenes'
    },
    {
        tittle: 'Resultados',
        path: '/resultados',
        icon: 'IoIosPaper',
        cName: 'list-group link-dark rounded',
        iName: 'resultados'
    },
    {
        tittle: 'Estadisticas',
        path: '/estadisticas',
        icon: 'GoGraph',
        cName: 'list-group link-dark rounded',
        iName: 'estadisticas'
    }
];
const DefaultSidebarData = [{ default: 'none' }]

function sidebarData(userRole) {

    switch (userRole) {
        case '2001':
            return PatientSidebarData
        case '2002':
            return LabSidebarData
        case '2003':
            return DoctorSidebarData
        case '2004':
            return AdminSidebarData
        default:
            return DefaultSidebarData
    }
}
module.exports = sidebarData;
