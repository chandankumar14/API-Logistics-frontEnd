import React from 'react';
import img1 from '../Assest/breakfast.jpg';
import img2 from '../Assest/dinner.png';
import img3 from '../Assest/homepageimg.png';
 


class Admin extends React.Component{
  // this is alos not using  i designed only for testing--------->
    render(){
        return(
            <div>
     <h3 style= {{backgroundColor:'rosybrown',
     margin:'10px',textAlign:'center',
     fontFamily:' Times New Roman, Times, serif'}}>welcome to Online Food-Ordering </h3>





     <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <img class="d-block w-100" src={img1} alt="First slide" style ={{width:'100%',height:'400px'}} />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img2} alt="Second slide" style={{width:'100%', height:'400px'}} />
    </div>
    <div class="carousel-item">
      <img class="d-block w-100" src={img3} alt="Third slide"  style={{width:'100%', height:'400px'}}/>
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>

            </div>
        )
    }
}

export default Admin;