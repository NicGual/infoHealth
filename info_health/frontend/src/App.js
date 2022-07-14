import React from 'react';
import { Route, Routes, Navigate } from 'react-router-dom';
import './App.css';
import Results from './components/Results/Results';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup';
import Statistics from './components/Statistics/Statistics';
import NotFound from './components/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import './components/SidebarBoots/SidebarBoots.css'
import Medicine from './components/Medicine/Medicine';
import LabTest from './components/LabTest/LabTest';
import ActiveOrders from './components/ActiveOrders/ActiveOrders'
import Unauthorized from './components/Unauthorized/Unauthorized'
import EditResults from './components/EditResults/EditResults'
import Appointments from './components/Appointments/Appointment'
import Agenda from './components/Agenda/Agenda'
import PatientSearch from './components/PatientSearch/PatientSearch'
import EditUser from './components/EditUser/EditUser'
import SidebarProvider from './components/SidebarProvider/SidebarProvider';
import LoadingSpinner from './components/LoadingSpinner/LoadingSpinner';
import ModalWindow from './components/ModalWindow/ModalWindow';
import NotAuthenticated from './components/NotAuthenticated/NotAuthenticated';

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
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2002', '2004']} />}>
              <Route path='/editar-resultados' element={<EditResults />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2003', '2004']} />}>
              <Route path='/toma-laboratorio' element={<LabTest />} />
              <Route path='/asignacion-citas' element={<Appointments />} />
              <Route path='/agenda' element={<Agenda />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2002', '2003', '2004']} />}>
              <Route path='/buscar-pacientes' element={<PatientSearch />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2001', '2002', '2003', '2004']} />}>
              <Route path='/estadisticas' element={<Statistics />} />
              <Route path='/menu' element={<Menu />} />
              <Route path='/' element={<Navigate to="/menu" />} />
              <Route path='/*' element={<NotFound />} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2004']} />}>
              <Route path='/editar-usuario' element={<EditUser />} />
            </Route>

          </Route>
        </Route>
        <Route element={<NotAuthenticated />}>
          <Route path='/signin' element={<Signin />} />
          <Route path='/signup' element={<Signup />} />
        </Route>





        <Route path='/prueba' element={<LoadingSpinner />} />
      </Routes>
    </>
  )
}

export default App;
