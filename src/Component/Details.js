import React from 'react';
import '../Style/Dashboard.css'
import {Modal} from 'react-bootstrap';
import queryString from 'query-string';
import axios from 'axios';


class Details extends React.Component{
// declearing constructor here to strore state here------->
constructor() {
    super();
    this.state = {
       details:[],
       coustomer_details:[],
       show: false,
        Coustomer_name:'',
        meeting_takenby:'',
        meeting_organiser:'',
        meeting_type:'',
       id:undefined
      
       
    }}

// this api call at the page loading time

    componentDidMount(){
        const queryParams = queryString.parse(this.props.location.search);
        const coustomer_id= queryParams.coustomer_id;
        let Obj = {
            id:coustomer_id
        };


      axios({
    method:'POST',
    url:'http://localhost:5989/detail',
    headers:{'Content-Type':'application/json'},
     data:Obj
      })
      .then(response=>this.setState({
           details:response.data.coustomer_details,
           id:coustomer_id
        }))
    .catch(err=>console.log(err))





    axios({
      method:'POST',
      url:'http://localhost:5989/recordbyid',
      headers:{'Content-Type':'application/json'},
       data:Obj
        })
        .then(response=>this.setState({
             coustomer_details:response.data.record,
             id:coustomer_id
          }))
      .catch(err=>console.log(err))




    }


// fetching all details of coustomer  
Record  = ()=>{
const {   id } = this.state;
let Obj ={
id:id
}

  axios({
    method:'POST',
    url:'http://localhost:5989/detail',
    headers:{'Content-Type':'application/json'},
    data:Obj
      })
      .then(response=>this.setState({
           details:response.data.coustomer_details
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

// here making api call for creating meeting---------->
create = () => {
const { Coustomer_name,meeting_takenby,meeting_organiser,meeting_type,id} = this.state;
const createObj = {
   Coustomer_name:Coustomer_name,
   meeting_takenby:meeting_takenby,
   meeting_organiser:meeting_organiser,
   meeting_type:meeting_type,
   id :id,
   
   
};
axios({
    method: 'POST',
    url: 'http://localhost:5989/details',
    headers: { 'Content-Type': 'application/json' },
    data: createObj
})
    .then(response => {
        if (response.data.message == 'record has been save successfully') {
            this.setState({
              show: false,
            Coustomer_name:'',
             meeting_takenby:'',
             meeting_organiser:'',
             meeting_type:''
               });
           
        }
       
alert(response.data.message);
       
    })
    .catch(err => console.log(err))
}
// here api call for signup is end---------->


    render(){
        const {   Coustomer_name,meeting_takenby,meeting_organiser,meeting_type,details,coustomer_details } = this.state;
        return(
            <div>

<div className = "container-fluid">
    <div className="sidebar">
    <a  onClick={()=>this.Record()}> Record</a>
    <a onClick={()=>this.lunch()}> create</a>
    <a onClick={()=>this.lunch()}> Cient</a>
    <a  onClick={()=>this.lunch()}>Profile</a> 
    </div>
    <div className="content-area">


   <div className="Details">
     
   <div>
   {coustomer_details.map(item=>{return(
   <div class="row">  
    <div class="col-sm-4 col-md-4 col-lg-4">
      <label>Coustomer_name:</label><br></br>
    <h5>{item.Coustomer_name}</h5>
    <label>Company_name:</label><br></br>
    <h5>{item.Company_name}</h5>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4">
    <label>Contact_Number:</label><br></br>
     <h4>{item.Contact_number}</h4>
     <label>Pin_code:</label><br></br>
     <h5>{item.Pin_code}</h5>
    </div>
    <div class="col-sm-4 col-md-4 col-lg-4">
    <label>Email_Address:</label><br></br>
      <p>{item.email}</p>
    </div>
  </div>
)})}
   </div>

     
     </div> 
   








    <table class="table table-hover">
  <thead>
    <tr>
      <th >Coustomer_name</th>
      <th>meeting_takenby</th>
      <th >meeting_organiser</th>
      <th >meeting_type</th>
      <th>Date</th>
     
    </tr>
  </thead>
  <tbody>
  {details.map(item=>{return(
          <tr>
          <td> {item.Coustomer_name }</td>
            <td>{item.meeting_takenby}</td>
            <td>{item.meeting_organiser}</td>
            <td>{item.meeting_type}</td>
            <td>{item.Date}</td>
           
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
 <Modal.Title>create new meeting</Modal.Title>
 </Modal.Header>
                   
 <Modal.Body>
    <div>
      <h4>create meeting</h4>
     </div>
     <form>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter Copustomer_Name"
       value={Coustomer_name} onChange={(event) => this.handleChange(event, 'Coustomer_name')} />
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Meeting taken_by"
       value={meeting_takenby} onChange={(event) => this.handleChange(event, 'meeting_takenby')} />
    </div>
  </div>
 
</form>


<form style={{marginTop:"20px",marginBottom:"20px"}}>
  <div class="row">
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter meeting organiser name" 
       value={ meeting_organiser} onChange={(event) => this.handleChange(event, 'meeting_organiser')}/>
    </div>
    <div class="col">
      <input type="text" class="form-control" placeholder="Enter meeting type"
       value={meeting_type} onChange={(event) => this.handleChange(event, 'meeting_type')} />
    </div>
  </div>
 
</form>



<div >
<button onClick={()=>this.create()} className="signup" >create</button>
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

 export default Details