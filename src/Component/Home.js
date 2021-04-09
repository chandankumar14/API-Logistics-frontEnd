import React from 'react';
import Signup from '../Component/signup';
import Carousel from '../Component/carousel';



class Home extends React.Component {
  
    render() {
        // this section are not using ------> i designed only for testing----->
              return (
            <React.Fragment>
                <Signup />        
                <Carousel  />
               
            </React.Fragment>
        )
    }
}

export default Home;