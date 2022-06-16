import { ArrowBackOutlined } from '@material-ui/icons';
import React from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import "./watch.scss";

const BUCKET_URL = process.env.REACT_APP_BUCKET_URL;

const Watch = (props) => {
  let navigate = useNavigate();
  const {state} = useLocation();
  const { url } = state;
  const handleClick = () => {
    navigate("/", {replace: true});
  }

  console.log(`%cThe BUCKET`,"color:yellow;font-size:20px",BUCKET_URL + url);

   return(
    <div
      className="watch"
      data-test="component-watch"
    >
      <div className="back" onClick={handleClick}>
        <ArrowBackOutlined/>
        Home
      </div>
      <video className="video" autoPlay progress="" controls src={ BUCKET_URL + url }/>
    </div>
   )
 }

export default Watch
