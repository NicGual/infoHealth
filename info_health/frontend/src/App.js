import React from 'react';
import Cookies from 'universal-cookie';
import './App.css';
import SidebarBoots from './components/SidebarBoots/SidebarBoots';
import Login from './components/Login/Login';
import Results from './components/Results/Results';
import Menu from './components/Menu/Menu';
import Layout from './components/Layout/Layout';
import Signin from './components/Signin/Signin'
import Signup from './components/Signup/Signup';
import { BrowserRouter as Router, Switch,Route } from 'react-router-dom';
import './components/SidebarBoots/SidebarBoots.css'
//import 'bootstrap/dist/css/bootstrap.min.css';
//import 'bootstrap/dist/js/bootstrap.bundle'
//import './components/Sidebar/Sidebar.css'

function App() {
  const cookies = new Cookies();
  return (
    <>
      
      <Router>    
        <Layout>
          <Switch>
            <Route path='/menu' render={() => {return(<Menu/>)}}/>
            <Route path='/resultados' render={() => {return(<Results/>)}}/>
            <Route path='/login' render={() => {return(<Login/>)}}/>
            <Route path='/signin' render={() => {return(<Signin/>)} }/>
            <Route path='/signup' render={() => {return(<Signup/>)} }/>
          </Switch>
        </Layout>
        
      </Router>
      
      
    </>
  )
}

export default App;
