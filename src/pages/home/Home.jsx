import List from '../../components/list/List';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../featured/Featured';
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getStars } from '../../redux/apiCall';
import { uniqueArray, randomArray, getObjs } from '../../helperFunctions';


const Home = (props) => {
  const dispatch = useDispatch();
  const stars = useSelector(state=>state.stars.collection);
  const [ disp, setDisp ] = useState([]);

  useEffect(()=>{
    getStars(dispatch)
  },[dispatch])

  useEffect(()=>{
    const uniqueArr = uniqueArray(stars || []);
    const randomArr = randomArray(uniqueArr, 10);
    setDisp(randomArr);
  },[stars])

  return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <Navbar />
      <Featured type="movie"/>
      {
        disp?.map((item,index)=><List key={index} name={item} data={getObjs(stars,item)} />)
      }
    </div>
   )
  }

export default Home
