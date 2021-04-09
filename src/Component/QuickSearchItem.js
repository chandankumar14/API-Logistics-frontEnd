import React from 'react';
import { withRouter } from 'react-router-dom';

class QuickSearchItem extends React.Component {

    handleClick = (id,mealid) => {
        const Id = id;
        const mealId = mealid;
        this.props.history.push(`/restaurantsearchpage/?mealtype_id=${mealId}&Product_id=${Id}`);
    }

    render() {
        
       
const {name, image, content ,id ,mealtype_id} = this.props

        return (
            <div>

        <div className="card1"  onClick={() => this.handleClick(id ,mealtype_id)}>
            <div className="left">
            <img src={image} alt="image3" id="img12" />
            </div>
    
            <div className="right">
                <div className="breakfast"> {name}</div>
                <div className="paracontent">{content}</div>
            </div>
    
        </div>

    </div>
     

        )
    }
}

export default withRouter(QuickSearchItem);