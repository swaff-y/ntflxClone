import List from '../../components/list/List';
import React, { useEffect, useState } from 'react';
import Navbar from '../../components/navbar/Navbar';
import Featured from '../../featured/Featured';
import "./home.scss";
import { useDispatch, useSelector } from "react-redux";
import { getStars, getDisplay, getMovies, getSeries, getNew, getPopular } from '../../redux/apiCall';
import { uniqueArray, randomArray, getObjs, checkForImages } from '../../helperFunctions';
// import { log } from '../../../../backEnd/logger';


const Home = (props) => {
  const dispatch = useDispatch();
  const movies = useSelector(state=>state.movies.collection);
  const stars = useSelector(state=>state.stars.collection);
  const series = useSelector(state=>state.series.collection);
  const display = useSelector(state=>state.display.collection);
  const newVids = useSelector(state=>state.newVids.collection);
  const popular = useSelector(state=>state.popular.collection);
  // const [ disp, setDisp ] = useState([]);
  const [ selectionType, setSelectionType ] = useState("featured");

  //Make the api calls
  useEffect(()=>{
    getDisplay(dispatch);
    getStars(dispatch);
    getMovies(dispatch);
    getSeries(dispatch);
    getNew(dispatch);
    getPopular(dispatch);
  },[dispatch])

  useEffect(()=>{
    display.forEach((item)=>{
        checkForImages(item);
    });

    // const uniqueArr = uniqueArray(display || []);
    // const randomArr = randomArray(uniqueArr, 8);
    // setDisp(randomArr?.sort());
    // setDisp(display?.sort());
  },[display])

  useEffect(()=>{
    newVids.forEach((item)=>{
        checkForImages(item);
    });
  },[newVids])

  useEffect(()=>{
    popular.forEach((item)=>{
        checkForImages(item);
    });
  },[popular])

  useEffect(()=>{
    movies.forEach((item)=>{
        checkForImages(item);
    });
  },[movies])

  useEffect(()=>{
    series.forEach((item)=>{
        checkForImages(item);
    });
  },[series])

  useEffect(()=>{
    stars.forEach((item)=>{
        checkForImages(item);
    });
  },[stars])

  return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <Navbar setSelectionType={setSelectionType}/>
      <Featured type={ selectionType } setType={ setSelectionType }/>
      {
        selectionType === "featured"
        ?
        uniqueArray(display)?.map((item,index)=><List key={index} name={item} data={getObjs(display,item)} />)
        :
        selectionType === "stars"
        ?
        uniqueArray(stars)?.map((item,index)=><List key={index} name={item} data={getObjs(stars,item)} />)
        :
        selectionType === "movies"
        ?
        uniqueArray(movies)?.map((item,index)=><List key={index} name={item} data={getObjs(movies,item)} />)
        :
        selectionType === "series"
        ?
        uniqueArray(series)?.map((item,index)=><List key={index} name={item} data={getObjs(series,item)} />)
        :
        selectionType === "new"
        ?
        uniqueArray(newVids)?.map((item,index)=><List key={index} name={item} data={getObjs(newVids,item)} />)
        :
        selectionType === "popular"
        ?
        uniqueArray(popular)?.map((item,index)=><List key={index} name={item} data={getObjs(popular,item)} />)
        :
        uniqueArray(display)?.map((item,index)=><List key={index} name={item} data={getObjs(display,item)} />)
      }
    </div>
   )
  }

export default Home
