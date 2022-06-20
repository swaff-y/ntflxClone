import List from '../../components/list/List';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../featured/Featured';
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getStars, getDisplay } from '../../redux/apiCall';
import { uniqueArray, randomArray, getObjs, checkForImages } from '../../helperFunctions';


const Home = (props) => {
  const dispatch = useDispatch();
  // const stars = useSelector(state=>state.stars.collection);
  const display = useSelector(state=>state.display.collection);
  const [ disp, setDisp ] = useState([]);

  //Make the api call
  useEffect(()=>{
    getDisplay(dispatch)
  },[dispatch])

  useEffect(()=>{

    display.forEach((item,index)=>{
        checkForImages(item);
    });

    const uniqueArr = uniqueArray(display || []);
    const randomArr = randomArray(uniqueArr, 8);
    setDisp(randomArr?.sort());
  },[display])

  return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <Navbar />
      <Featured type="movie"/>
      {
        disp?.map((item,index)=><List key={index} name={item} data={getObjs(display,item)} />)
      }
    </div>
   )
  }

export default Home
