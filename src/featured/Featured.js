import React from 'react';
import "./featured.scss";

const Featured = (props) => {
   return(
    <div
      className="featured"
      data-test="component-featured"
    >
      <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg" />
    </div>
   )
 }

export default Featured
