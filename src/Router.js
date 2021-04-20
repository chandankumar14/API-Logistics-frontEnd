import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // package to perform routing in react app
import Signup from './Component/signup';
import Footer from './Component/Footer';
import Filter from './Component/Filter';
import Content from './Component/Content';
import Login from './Component/LoginPage'
import Dashboard from './Component/Dashboard'



const Router = () => {
    return (
        <BrowserRouter>
           
            <Route exact path="/" component={Login} />
            <Route exact path="/dashboard" component={Dashboard} />
            <Route exact path="/restaurantsearchpage" component={Filter} />
           
          <Footer />
           
        </BrowserRouter>
    )
}

export default Router;