import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import axios from 'axios';
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

login = () => {
    this.setState({ show: true });
}
//this is used for closed the modal----->
handleCancelLogin = () => {
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
handlelogin = () => {
    const { email, password,  } = this.state;
    const signUpObj = {
        email: email,
        password: password,
       
    };
    axios({
        method: 'POST',
        url: 'http://localhost:5989/login',
        headers: { 'Content-Type': 'application/json' },
        data: signUpObj
    })
        .then(response => {
            if (response.data.message == 'User LoggedIn Sucessfully') {
                this.setState({
                    show: false,
                    email: '',
                    password: ''
                   
                });
                alert(response.data.message);
            }
        })
        .catch(err => console.log(err))
}
// here api call for signup is end---------->




    render(){
        const {  email, password } = this.state;
        return(
            <div>
                <Button onClick={()=>this.login()} > login here</Button>
               

    <Modal show={this.state.show}>
    <Modal.Header>
 <Modal.Title>welcome to login  modal</Modal.Title>
 </Modal.Header>
                   
 <Modal.Body>
    <div>
      <h2>  login User</h2>
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
</Modal.Body>


<Modal.Footer>
<div>
<button onClick={()=>this.handlelogin()} class="btn btn-sm btn-success">Login</button>
<button class="btn btn-sm btn-danger" onClick={()=>this.handleCancelLogin()}>Cancel</button>
</div>



</Modal.Footer>
 </Modal>





 </div>

        )
    }
}

export default Login