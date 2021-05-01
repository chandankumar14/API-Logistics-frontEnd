import React from 'react';
import '../Style/Dashboard.css'
import {Modal} from 'react-bootstrap';
import axios from 'axios';


class Dashboard extends React.Component{
// declearing constructor here to strore state here------->
constructor() {
    super();
    this.state = {
       Record:[],
       show: false,
        email: '',
        Coustomer_name:'',
        Company_name:'',
        Contact_number:'',
        Pin_code:'',
        stage:''
      
       
    }}

// this api call at the page loading time

    componentDidMount(){
      axios({
    method:'GET',
    url:'http://localhost:5989/records',
    headers:{'Content-Type':'application/json'}
      })
      .then(response=>this.setState({
           Record:response.data.record
        }))
    .catch(err=>console.log(err))
    }


// fetching record method 
Record  = ()=>{

  axios({
    method:'GET',
    url:'http://localhost:5989/records',
    headers:{'Content-Type':'application/json'}
      })
      .then(response=>this.setState({
           Record:response.data.record
        }))
    .catch(err=>console.log(err))  
}





// declearing function to open modal and close modal

lunch = () => {
this.setState({ show: true });
}
//this is used for closed the modal----->
handleCancel = () => {
this.setState({ show: false });
}

// this function is used to store the value which is typed in inputfield ---->
handleChange = (event, state) => {
    this.setState({ [state]: event.target.value });
}

// here making api call for Signup---------->
handleadd = () => {
const { email,Coustomer_name,Company_name,Contact_number,Pin_code,stage} = this.state;
const signUpObj = {
    email: email,
   Company_name:Company_name,
   Coustomer_name:Coustomer_name,
   Contact_number:Contact_number,
   Pin_code:Pin_code,
   stage:stage,
   
   
};
axios({
    method: 'POST',
    url: 'http://localhost:5989/record',
    headers: { 'Content-Type': 'application/json' },
    data: signUpObj
})
    .then(response => {
        if (response.data.message == 'record has been save successfully') {
            this.setState({
              show: false,
              email: '',
              Coustomer_name:'',
              Company_name:'',
              Contact_number:'',
              Pin_code:'',
              stage:''
               });
           
        }
       
alert(response.data.message);
       
    })
    .catch(err => console.log(err))
}
// here api call for signup is end---------->

handleClick = (id) => {
 
  const coustomer_id = id;
  this.props.history.push(`/detailspage/?coustomer_id=${coustomer_id}`);
}



    render(){
        const {  email,  Coustomer_name,Company_name,Contact_number,Pin_code,stage,Record } = this.state;
        return(
            <div>

<div className = "container-fluid">
    <div className="sidebar">
    <a  onClick={()=>this.Record()}> Record</a>
    <a onClick={()=>this.lunch()}> lead</a>
    <a onClick={()=>this.lunch()}> Cient</a>
    <a  onClick={()=>this.lunch()}>Profile</a> 
    </div>
    <div className="content-area">
    <table class="table table-hover">
  <thead>
    <tr>
      <th >Coustomer_name</th>
      <th>Company_Name</th>
      <th >Contact_number</th>
      <th >Pincode</th>
      <th>Stage</th>
      <th>Email</th>
    </tr>
  </thead>
  <tbody>
  {Record.map(item=>{return(
          <tr>
            
          <a  onClick={() => this.handleClick(item.id)}> 
          <td> {item.Coustomer_name }</td></a>
            <td>{item.Company_name}</td>
            <td>{item.Contact_number}</td>
            <td>{item.Pin_code}</td>
            <td>{item.stage}</td>
            <td>{item.email}</td>
          </tr>
        );
        })}
   
  </tbody>
</table>
    </div>
</div>





<Modal show={this.state.show}
     size="lg">
    <Modal.Header>
 <Modal.Title>Registered new Item Here</Modal.Title>
 </Modal.Header>
                   
 <Modal.Body>
    <div>
      <h4> Registered here</h4>
     </div>
     <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Copustomer_Name"
       value={Coustomer_name} onChange={(event) => this.handleChange(event, 'Coustomer_name')} />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Company_name"
       value={Company_name} onChange={(event) => this.handleChange(event, 'Company_name')} />
    </div>
  </div>
 
</form>


<form style={{marginTop:"20px",marginBottom:"20px"}}>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Contact_Number" 
       value={ Contact_number} onChange={(event) => this.handleChange(event, 'Contact_number')}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Pin_Code"
       value={Pin_code} onChange={(event) => this.handleChange(event, 'Pin_code')} />
    </div>
  </div>
 
</form>


<form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Stage" 
       value={stage} onChange={(event) => this.handleChange(event, 'stage')}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Email address"
       value={email} onChange={(event) => this.handleChange(event, 'email')} />
    </div>
  </div>
 
</form>






<div >
<button onClick={()=>this.handleadd()} className="signup" >Add_Item</button>
<button  onClick={()=>this.handleCancel()}  className="cancel">Cancel</button>
</div>
</Modal.Body>
<Modal.Footer>
</Modal.Footer>
 </Modal>







            </div>
        )
    }
} 

 export default Dashboard