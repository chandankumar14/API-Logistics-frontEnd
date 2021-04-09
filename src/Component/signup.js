import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
import '../Style/Home.css'
import img1 from '../Assest/breakfast.jpg';
import img2 from '../Assest/dinner.png';
import img3 from '../Assest/homepageimg.png';
 

class Login extends React.Component{
// declearing constructor here to strore state here------->
    constructor() {
        super();
        this.state = {
           show: false,
            email: '',
            password: '',
          
           
        }}
// declearing function to open modal and close modal

signUp = () => {
    this.setState({ show: true });
}
//this is used for closed the modal----->
handleCancelSignUp = () => {
    this.setState({ show: false });
}

login = () => {
    this.setState({ show: true });
}
handleCancelLogin = () => {
    this.setState({ show: false });
}
// this function is used to store the value which is typed in inputfield ---->
    handleChange = (event, state) => {
        this.setState({ [state]: event.target.value });
    }

// here making api call for Signup---------->
handleSignUp = () => {
    const { email, password} = this.state;
    const signUpObj = {
        email: email,
        password: password,
       
    };
    axios({
        method: 'POST',
        url: 'http://localhost:5989/signup',
        headers: { 'Content-Type': 'application/json' },
        data: signUpObj
    })
        .then(response => {
            if (response.data.message == 'User SignedUp Sucessfully') {
                this.setState({
                    show: false,
                    email: '',
                    password: '',
                   });
               
            }
            this.props.history.push("/contetpage");
        })
        .catch(err => console.log(err))
}
// here api call for signup is end---------->

// Gmail login here----->

responseGoogle = (response) => {
    console.log(response)
    axios({
        method:'POST',
        url:'http://localhost:5989/goolge/signin/signup',
        headers:{'Content-type':'application/json'},
        data:{tokenId:response.tokenId}
    })
    .then(response=>{
        alert( 'you login success full')
        this.props.history.push("/contetpage");
        })
   
    .catch(
        err=>console.log(err)
    )   
}




    render(){
        const {  email, password, } = this.state;
        return(
            <div>




                <div className ="header">
                <Button onClick={()=>this.signUp()}  className= "btn-x"> signup/signIn</Button>
               </div>




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










    <Modal show={this.state.show}>
    <Modal.Header>
 <Modal.Title>welcome to signup  modal</Modal.Title>
 </Modal.Header>
                   
 <Modal.Body>
    <div>
      <h4>  Signup / signIn</h4>
     </div>

     <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" placeholder="Enter email"
    value={email} onChange={(event) => this.handleChange(event, 'email')}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" placeholder="Password"
    value={password} onChange={(event) => this.handleChange(event, 'password')}/>
  </div>
</form>



<div >
<button onClick={()=>this.handleSignUp()} className="signup">signup</button>
<button className="cancel" onClick={()=>this.handleCancelSignUp()}>Cancel</button>
</div>

</Modal.Body>
<Modal.Footer>

<div>
<GoogleLogin
     clientId="745717577080-5uo0jrq7g23qqioe155h28u94a0co1cj.apps.googleusercontent.com"
      buttonText="SignUp with Gmail"
      onSuccess={this.responseGoogle}
     onFailure={this.responseGoogle}
     className="btn google"
    cookiePolicy={'single_host_origin'}
    />
</div>

</Modal.Footer>
 </Modal>





 </div>

        )
    }
}

export default Login