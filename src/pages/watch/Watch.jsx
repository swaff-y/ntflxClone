import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { useNavigate } from "react-router-dom";
import "./watch.scss";

const Watch = (props) => {
  let navigate = useNavigate();
  const handleClick = () => {
    navigate("/", {replace: true});
  }

   return(
    <div
      className="watch"
      data-test="component-watch"
    >
      <div className="back" onClick={handleClick}>
        <ArrowBackOutlined/>
        Home
      </div>
      <video className="video" autoPlay progress="" controls src="https://www.dofactory.com/media/movie.mp4"/>
    </div>
   )
 }

export default Watch
