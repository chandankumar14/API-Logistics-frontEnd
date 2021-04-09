import React from 'react';
import '../Style/Wallpaper.css';
import Image from '../Assest/homepageimg.png';

class Wallpaper extends React.Component {

    render() {
       
        return (
            <div>

    

<div ><h1 id="heading"> FresherSolution && Support </h1></div>

    <div>
        <img src={Image} alt="image" id="top-image" />
        <div className="logo">ck!</div>
        <div className="content"><span> the best restaurants, cafés, and bars</span></div>
    
    </div>
     
      </div>
        )
    }
}

export default Wallpaper;