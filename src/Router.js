import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // package to perform routing in react app
import Home from './Component/Home';
import Admin from './Component/Admin'
import Login from './Component/Login'
import signup from './Component/signup'


const Router = () => {
    return (
        <BrowserRouter>
           
            <Route exact path="/" component={Home} />
            
           
          
           
        </BrowserRouter>
    )
}

export default Router;