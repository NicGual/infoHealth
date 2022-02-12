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


function App() {
  return (
    <>      
        <Layout>
          <Routes>
            <Route element={<ProtectedRoute/>}>
              <Route path='/menu' element={<Menu />} />
              <Route path='/estadisticas' element={<Statistics/>}/>
              <Route path='/resultados' element={<Results/>}/>
            </Route>
              
            <Route path='/signin' element={<Signin/>}/>
            <Route path='/signup' element={<Signup/>}/>
            <Route path='/*' element={<NotFound/>}/>
          </Routes>
        </Layout>
    </>
  )
}

export default App;
