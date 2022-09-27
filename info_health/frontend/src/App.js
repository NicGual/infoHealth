import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Results from './pages/Results/Results';
import Menu from './pages/Menu/Menu';
import Layout from './components/Layout/Layout';
import Signin from './pages/Signin/Signin'
import Signup from './pages/Signup/Signup';
import Statistics from './pages/Statistics/Statistics';
import NotFound from './pages/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './components/SidebarBoots/SidebarBoots.css'
import Medicine from './pages/Medicine/Medicine';
import LabTest from './pages/LabTest/LabTest';
import ActiveOrders from './pages/ActiveOrders/ActiveOrders'
import Unauthorized from './components/Unauthorized/Unauthorized'
import EditResults from './pages/EditResults/EditResults'
import Appointments from './pages/Appointments/Appointments'
import Agenda from './pages/Agenda/Agenda'
import PatientSearch from './pages/PatientSearch/PatientSearch'
import EditUser from './pages/EditUser/EditUser'
import SidebarProvider from './components/SidebarProvider/SidebarProvider';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ModalWindow from './components/ModalWindow/ModalWindow';
import NotAuthenticated from './components/NotAuthenticated/NotAuthenticated';
import UploadResults from './pages/UploadResults/UploadResults';
import CreateUser from './pages/CreateUser/CreateUser';
import EditAppointment from './pages/EditAppointment/EditAppointment';
import TableMyAppointments from './components/TableMyAppointments/TableMyAppointments';
import MyAppointments from './pages/MyAppointments/MyAppointments';
import EditInformation from './pages/EditInformation/EditInformation';
import InputValidation from './components/InputValidation/InputValidation';
import Prueba from './components/Prueba/Prueba';
import MyAgenda from './components/MyAgenda/MyAgenda';
import PatientCare from './pages/PatientCare/PatientCare';


function App() {
  return (

    <>
      <Routes>
        <Route element={<Layout />}>
          <Route element={<SidebarProvider />}>
            <Route element={<ProtectedRoute allowedRoles={['2001', '2004']} />}>
              <Route path='/resultados' element={<Results />} />
              <Route path='/medicina-general' element={<Medicine />} />
              <Route path='/ordenes' element={<ActiveOrders />} />
              <Route path='/citas' element={<MyAppointments />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2002', '2004']} />}>
              <Route path='/editar-resultados' element={<EditResults />} />
              <Route path='/subir-resultados' element={<UploadResults/>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2001', '2003', '2004']} />}>
              <Route path='/asignacion-citas-laboratorio' element={<Appointments />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2003', '2004']} />}>
              <Route path='/toma-laboratorio' element={<LabTest />} />              
              <Route path='/agenda' element={<Agenda />} />
              <Route path='/atender-paciente' element={<PatientCare />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2002', '2003', '2004']} />}>
              <Route path='/buscar-pacientes' element={<PatientSearch />} />
              <Route path='/editar-citas' element={<EditAppointment/>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2001', '2002', '2003', '2004']} />}>
              <Route path='/estadisticas' element={<Statistics />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/' element={<Navigate to="/menu" />} />
              <Route path='/*' element={<NotFound />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2004']} />}>
              <Route path='/editar-usuario' element={<EditUser />} />
              <Route path='/crear-usuario' element={<CreateUser />} />
            </Route>
            <Route path='/editar-informacion' element={<EditInformation/>}/>
            <Route path='/mi-agenda' element={<MyAgenda/>} />
          </Route>
        </Route>
        <Route element={<NotAuthenticated />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
          
        </Route>





        <Route path='/prueba' element={<MyAgenda/>} />
      </Routes>
    </>
  )
}

export default App;
