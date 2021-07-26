import React, { useState } from 'react';
import {BrowserRouter, Route, Switch} from 'react-router-dom';
import NavBar from './components/navBar';
import SideBar from './components/sideBar';
import Dashboard from './pages/Dashboard/Dashboard';
import Settings from './pages/Settings/Settings';
import ReactNotification from 'react-notifications-component';
import Footer from './components/footer';
import './App.css';
import 'react-notifications-component/dist/theme.css';

const App = () =>{

    const [height, setHeight] = useState(window.innerHeight);
    const [refresh, setRefresh] = useState(50);

    return(
        <div className='app'>
            <ReactNotification/>
            <BrowserRouter>
                <NavBar/>
                <SideBar height={height} setRefresh={setRefresh}/>
                <Switch>
                    <Route path='/' component={Dashboard} exact/>
                    <Route path='/settings' component={Settings} exact/>
                </Switch>
                <Footer setHeight={setHeight} refresh={refresh}/>
            </BrowserRouter>
        </div>
    );
};

export default App;