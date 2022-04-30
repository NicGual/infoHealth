import React from 'react';
import './App.css';
import Results from './components/Results/Results';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup';
import Statistics from './components/Statistics/Statistics';
import NotFound from './components/NotFound/NotFound'
import ProtectedRoute from './components/ProtectedRoute/ProtectedRoute';
import {   Route, Routes } from 'react-router-dom';
import './components/SidebarBoots/SidebarBoots.css'
import Medicine from './components/Medicine/Medicine';
import LabTest from './components/LabTest/LabTest';
import ActiveOrders from './components/ActiveOrders/ActiveOrders'
import Unauthorized from './components/Unauthorized/Unauthorized'
import EditResults from './components/EditResults/EditResults'
import Appointments from './components/Appointments/Appointment'
import Agenda from './components/Agenda/Agenda'
import PatientSearch from './components/PatientSearch/PatientSearch'

function App() {
  return (
    
    <>
        <Routes>  
          <Route element={<Layout/>}>             
            <Route element={<ProtectedRoute allowedRoles={['2001','2004']}/>}>
              <Route path='/menu' element={<Menu/>} />
              <Route path='/resultados' element={<Results/>}/>
              <Route path='/medicina-general' element={<Medicine/>}/>
              <Route path='/ordenes' element={<ActiveOrders/>}/>                                
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2002','2004']}/>}>
              <Route path='/editar-resultados' element={<EditResults/>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2003','2004']}/>}>
              <Route path='/toma-laboratorio' element={<LabTest/>}/>
              <Route path='/asignacion-citas' element={<Appointments/>} />
              <Route path='/agenda' element={<Agenda/>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2002','2003','2004']}/>}>
              <Route path='/buscar-pacientes' element={<PatientSearch/>} />
            </Route>

            <Route element={<ProtectedRoute allowedRoles={['2001','2002','2003','2004']}/>}>
              <Route path='/estadisticas' element={<Statistics/>}/>
            </Route>       

            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='no-autorizado' element={<Unauthorized/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Route>    
        </Routes>   
   </>
  )
}

export default App;
