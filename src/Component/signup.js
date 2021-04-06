import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios';
import GoogleLogin from 'react-google-login';
class Login extends React.Component{
// declearing constructor here to strore state here------->
    constructor() {
        super();
        this.state = {
           show: false,
            email: '',
            password: '',
            firstname: '',
            lastname: '',
           
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
    const { email, password, firstname, lastname } = this.state;
    const signUpObj = {
        email: email,
        password: password,
        firstname: firstname,
        lastname: lastname
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
                    firstname: '',
                    lastname: ''
                });
                alert(response.data.message);
            }
            this.props.history.push("/Admin")
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
        this.props.history.push("/Amind");
        })
   
    .catch(
        err=>console.log(err)
    )



   
    
}




    render(){
        const {  email, password, firstname, lastname,show } = this.state;
        return(
            <div>
                <Button onClick={()=>this.signUp()} > signup here</Button>
               

    <Modal show={this.state.show}>
    <Modal.Header>
 <Modal.Title>welcome to signup  modal</Modal.Title>
 </Modal.Header>
                   
 <Modal.Body>
    <div>
      <h2>  Signup User</h2>
     </div>

     <form>
  <div class="form-group">
    <label for="exampleInputEmail1">Email address</label>
    <input type="email" class="form-control" placeholder="Enter email"
    value={email} onChange={(event) => this.handleChange(event, 'email')}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">Enter Firstname</label>
    <input type="text" class="form-control" placeholder="Enter FirstName"
    value={firstname} onChange={(event) => this.handleChange(event, 'firstname')}/>
  </div>
  <div class="form-group">
    <label for="exampleInputEmail1">EnterLastName</label>
    <input type="text" class="form-control" placeholder="Enter lastName"
    value={lastname} onChange={(event) => this.handleChange(event, 'lastname')}/>
  </div>
  <div class="form-group">
    <label for="exampleInputPassword1">Password</label>
    <input type="password" class="form-control" placeholder="Password"
    value={password} onChange={(event) => this.handleChange(event, 'password')}/>
  </div>
  
</form>
</Modal.Body>


<Modal.Footer>
<div>
<button onClick={()=>this.handleSignUp()} class="btn btn-sm btn-success">signup</button>
<button class="btn btn-sm btn-danger" onClick={()=>this.handleCancelSignUp()}>Cancel</button>
</div>
<hr></hr>
<h3>OR</h3>
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