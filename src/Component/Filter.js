import React from 'react';
import '../Style/Filter.css';
import axios from 'axios';
import queryString from 'query-string';
class Filter extends React.Component{

    constructor(){
        super();
        this.state={
            restaurantList: [],
            locationList: [],
            location: undefined,
            mealtype: undefined,
            hcost: undefined,
            lcost: undefined,
            sort: 1
        }
      }
      
      componentDidMount(){
        const queryParams = queryString.parse(this.props.location.search);
        const mealtype_id= queryParams.mealtype_id;
        const { sort, page } = this.state;

        let filterObj = {
            mealtype_id: mealtype_id,
            sort: sort,
            page: page

        };



 // Making Filter API Call 
 axios({
    method: 'POST',
    url: 'http://localhost:5989/filter',
    headers: { 'Content-Type': 'application/json' },
    data: filterObj
})
    .then(res => this.setState({
        restaurantList: res.data.restaurant,
        pageCount: res.data.pageCount,
        mealtype: mealtype_id

    }))
    .catch(err => console.log(err))

// this api for location-------------
      axios({
        method: 'GET',
        url: 'http://localhost:5989/location',
        headers: { 'Content-Type': 'application/json' }
    }).then(res => this.setState({ locationList: res.data.Location }))
        .catch(err => console.log(err))
        }    

        

        handleClick = (itemId) => {
            // Routing to URL using history object
            this.props.history.push(`/restaurantdetailspage/?restaurant=${itemId}`);
        }


onSortChange = (sort) => {
    
    const {   mealtype, page, lcost, hcost } = this.state;

    // making the input object for filter API basis changed sort option
    let filterObj = {
        mealtype_id: mealtype,
        sort: Number(sort),
        page: page,
        lcost: lcost,
        hcost: hcost
    };
        // Update the URL basis the changed selections
        this.props.history.push(`/restaurantsearchpage?mealtype=${mealtype}&costlessthan=${hcost}&costmorethan=${lcost}&page=${page}&sort=${sort}`);


    axios({
        method: 'POST',
        url: 'http://localhost:5989/filter',
        headers: { 'Content-Type': 'application/json' },
        data: filterObj
    })
        .then(res => this.setState({
         restaurantList: res.data.restaurant, 
         sort: Number(sort),
         pageCount: res.data.pageCount }))
        .catch(err => console.log(err))
}

handleCostChange = (lcost, hcost) => {
   
    const { mealtype, sort, page } = this.state;

    let filterObj = {
        mealtype_id: mealtype,
        hcost: hcost,
        lcost: lcost,
        sort: sort,
        page: page
    };

    
        // Update the URL basis the changed selections
        this.props.history.push(`/restaurantsearchpage?mealtype_id=${mealtype}&costlessthan=${hcost}&costmorethan=${lcost}&page=${page}&sort=${sort}`);

    
    axios({
        method: 'POST',
        url: 'http://localhost:5989/filter',
        headers: { 'Content-Type': 'application/json' },
        data: filterObj
    })
        .then(res => this.setState({
            restaurantList: res.data.restaurant,
            lcost: Number(lcost),
            hcost: Number(hcost),
           
        }))
        .catch(err => console.log(err))
}




handleLocationChange = (event) => {
    
    const area = event.target.value.split('-')[0];
    const { mealtype, hcost, lcost, page, sort } = this.state;

    // making the input object for filter API basis changed location
    let filterObj = {
        location_id: area,
        mealtype_id: mealtype,
        hcost: hcost,
        lcost: lcost,
        sort: sort,
       
    };

    // Update the URL basis the changed selections
    this.props.history.push(`/restaurantsearchpage?location_id=${area}&mealtype_id=${mealtype}&costlessthan=${hcost}&costmorethan=${lcost}&page=${page}&sort=${sort}`);

    axios({
        method: 'POST',
        url: 'http://localhost:5989/filter',
        headers: { 'Content-Type': 'application/json' },
        data: filterObj
    })
        .then(res => this.setState({ restaurantList: res.data.restaurant, pageCount: res.data.pageCount, location: area }))
        .catch(err => console.log(err))
}







    render(){
        const {locationList ,restaurantList ,sort} = this.state;
        return(
            <div>





<div ><h1 id="heading"> FresherSolution && Support </h1></div>

<div class="container-fluid">
    <div class="row">


<div class="col-sm-4 col-lg-4 col-md-4">

    <div class="Filter" data-toggle="collapse" data-target="#demo" ><span class="glyphicon glyphicon-th"></span>Filter</div>

    <div class="collapse show" id="demo">

    <div class="side-upper-second"><p>Select Location</p></div>
    

        <select  id="select-location"  onChange={this.handleLocationChange}> 
        <option value="0" selected disabled>Please select a city</option>
        
        {locationList.map(item=>{return(        
                <option value={`${item.location_id}-${item.city_id}`}>{item.name}</option>
                
                )})}

          </select>
          

          <div class="cost-for-two">Cost For Two</div>

          <div styl="display:block">
              <input type="radio"  name="cost"  class="radio"  onChange={() => this.handleCostChange(1, 500)}/>
              <span  class="cost-two">Less than &#8377; 500</span>
          </div>
      
          <div styl="display:block">
              <input type="radio"  name="cost"  class="radio"  onChange={() => this.handleCostChange(500, 1000)}/>
              <span  class="cost-two">&#8377; 500 to &#8377; 1000</span>
          </div>
      
          <div styl="display:block">
              <input type="radio" name="cost"   class="radio" onChange={() => this.handleCostChange(1000, 1500)}/>
              <span  class="cost-two">&#8377; 1000 to &#8377; 1500</span>
          </div>
          
          <div styl="display:block">
              <input type="radio" name="cost"  class="radio" onChange={() => this.handleCostChange(1500, 2000)} />
              <span  class="cost-two">&#8377; 1500 to &#8377; 2000</span>
          </div>
      
          <div styl="display:block">
              <input type="radio"  name="cost"  class="radio" onChange={() => this.handleCostChange(2000, 10000)} />
              <span class="cost-two">&#8377; 2000 +</span>
          </div>
      
      
          <div class="sort">Sort</div>
      
      <div styl="display:block">
          <input type="radio" name="sort"  class="radio" checked={sort == 1} onChange={() => this.onSortChange(1)}   />
          <span class="cost-two">Price low to high</span>
      </div>
      <div styl="display:block">
          <input type="radio" name="sort"  class="radio" checked={sort == -1} onChange={() => this.onSortChange(-1)}  />
          <span class="cost-two">Price High to Low</span>
      </div>




    </div>
</div>




						
<div>
                            <div className="col-sm-8 col-md-8 col-lg-8 ">

<div className="scrollbar">

           {restaurantList.length > 0 ? restaurantList.map((item) => {
              return <div className="Item" >
            <div className="row pl-1">
                                            <div className="col-sm-4 col-md-4 col-lg-4">
                                                <img className="img" src={item.thumb} />
                                            </div>
                                            <div className="col-sm-8 col-md-8 col-lg-8">
                                                <div className="rest-name">{item.name}</div>
                                                <div className="res-location">{item.locality}</div>
                                                <div className="rest-address">{item.city}</div>
                                            </div>
                                        </div>
                 <hr />
                  <div className="row padding-left">
                                            <div className="col-sm-12 col-md-12 col-lg-12">
                                                <div className="rests-address">CUISINES : {item.cuisine.map((item) => item.name + ', ')}</div>
                                                <div className="rests-address">COST FOR TWO : {item.min_price} </div>
                                            </div>
                                        </div>
           </div>
            }) : <div className="noData"> Sorry: No Data Found</div>}
             </div>


</div>

                            
                        </div>
						













</div>

</div>
            </div>
        )
    }
}

export default Filter;