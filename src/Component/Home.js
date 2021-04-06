import React from 'react';
import {Button,Modal} from 'react-bootstrap';
import GoogleLogin from 'react-google-login';
class Login extends React.Component{

constructor(){
    super();
    this.setState({
        show:false,
        email:'',
        password:''
    })
}



signUp = () => {
    this.setState({ show: true });
}
//this is used for closed the modal----->
handleCancelSignUp = () => {
    this.setState({ show: false });
}

// this function is used to store the value which is typed in inputfield ---->
    handleChange = (event, state) => {
        this.setState({ [state]: event.target.value });
    }

// here api call for signup is end---------->

// Gmail login here----->

responseGoogle = (response) => {
    console.log(response)
}


    render(){
       
        return(
            <div>
<Button>Signup/SignIn</Button>

                <Modal>
                    <Modal.Header>
                    <Modal.Title>Signup/SignIn</Modal.Title>
                    </Modal.Header>
                    <Modal.Body></Modal.Body>
                    <Modal.Footer></Modal.Footer>
                </Modal>
 </div>

        )
    }
}

export default Login