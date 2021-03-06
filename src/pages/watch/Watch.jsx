import { ArrowBackOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate, useLocation } from "react-router-dom";
import { useParams } from 'react-router';
import { getObj, putObj } from '../../redux/apiCall';
import "./watch.scss";
import { useDispatch, useSelector } from 'react-redux';

const BUCKET_URL = process.env.REACT_APP_BUCKET_URL;

const Watch = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const params = useParams();
  const watch = useSelector(state=>state.watch.collection);

  useEffect(()=>{
    let viewCount = watch.viewCount;
    viewCount++;
    console.log("count", viewCount);
    if(viewCount != null)
      putObj(params?.id, { viewCount });
  },[watch])

  useEffect(()=>{
    getObj(dispatch, params.id);
  },[params.id]);

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
      <video className="video" autoPlay progress="" controls src={ BUCKET_URL + watch?.url }/>
    </div>
   )
 }

export default Watch
