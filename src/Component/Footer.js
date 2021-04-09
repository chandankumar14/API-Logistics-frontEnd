import React from 'react';
import '../Style/Footer.css';
import logo from '../Assest/logo.png';
class Footer extends React.Component {

    render() {
       
        return (
            <div>

    
<div className="container-fluid" id ="footer1">
    <div className="row">
    <div className="col-sm-4 col-md-4 col-lg-4">
        
        <p id="design">Design</p> 
    <div className="img">
        <img src={logo} alt="image" id="img" />
    </div>
    </div>
    
    
    <div className="col-sm-4 col-md-4 col-lg-4">
        <div className="company">Company</div>
        <hr />
        <a href="#"><p id="p">Services</p></a>
        <a href="#"><p id="p">Abouts-us</p></a>
        <a href="#"><p id="p">Location</p></a>
    </div>
    <div className="col-sm-4 col-md-4 col-lg-4">
        <div className="contact">Company</div>
        <hr />
        <div className="mob">
            <a href="#"><p id="p">Services</p></a>
            <a href="#"><p id="p">Abouts-us</p></a>
            <a href="#"><p id="p">Location</p></a>  
        </div>
      
    </div>
    
    </div> 
    </div>
    
    
    
    <div className="copyright">copyright@Team FresherSolution && Support</div>
     
     
      </div>
        )
    }
}

export default Footer;