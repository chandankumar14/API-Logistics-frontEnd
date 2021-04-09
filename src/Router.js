import React from 'react';
import { BrowserRouter, Route } from 'react-router-dom'; // package to perform routing in react app
import Signup from './Component/signup';
import Footer from './Component/Footer';
import Filter from './Component/Filter';
import Content from './Component/Content';



const Router = () => {
    return (
        <BrowserRouter>
           
            <Route exact path="/" component={Signup} />
            <Route exact path="/contetpage" component={Content} />
            <Route exact path="/restaurantsearchpage" component={Filter} />
           
          <Footer />
           
        </BrowserRouter>
    )
}

export default Router;