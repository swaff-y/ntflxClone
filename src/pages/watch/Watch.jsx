import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import "./watch.scss";

const Watch = (props) => {
   return(
    <div
      className="watch"
      data-test="component-watch"
    >
      <div className="back">
        <ArrowBackOutlined />
        Home
      </div>
      <video className="video" autoPlay progress="" controls src="https://www.dofactory.com/media/movie.mp4"/>
    </div>
   )
 }

export default Watch
