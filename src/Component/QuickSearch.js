import React from 'react';
import '../Style/QuickSearch.css';
import QuickSearchItem from '../Component/QuickSearchItem';

class QuickSearch extends React.Component {


    render() {
       
        const {mealtype} = this.props

        return (
            <div>

                
<div><p  id="quick">Quick Searches</p></div>



<div className="container-fluid">
    <div className="row">
    {mealtype.map((item) => {
 return <QuickSearchItem id={item._id} name={item.name} content={item.content}
 
         image={item.image} mealtype_id={item.MealType_id} />

   })}

    </div>
</div>
      </div>
        )
    }
}

export default QuickSearch;