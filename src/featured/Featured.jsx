import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { capitalizeFirstLetter, getFeatured, splitCamelCase } from '../helperFunctions';
import { useNavigate } from "react-router-dom";
import "./featured.scss";

const Featured = ({type, setType}) => {
  const display = useSelector(state=>state.display.collection);
  const [ featured, setFeatured ] = useState({});
  let navigate = useNavigate();

  useEffect(()=>{
    setFeatured(getFeatured(display));
  },[display])

  const handlePlayClick = (e) => {
    navigate(`/watch/${featured._id}`, {replace: true, state: { url: featured.url } });
  }
  const handleInfoClick = (e) => {
    navigate(`/info/${featured._id}`, {replace: true, state: { url: featured.url } });
  }

  const handleChange = (e) => {
      setType(e.target.value);
  }

   return(
    <div
      className="featured"
      data-test="component-featured"
    >
      {
        type
        &&
        (
          <div className="category">
            <span>{ capitalizeFirstLetter(type) }</span>
            <select name="genre" id="genre" defaultValue={"Featured"} onChange={handleChange}>
              <option disabled>Featured</option>
              <option value="featured">Featured</option>
              <option value="stars">Stars</option>
              <option value="movies">Movies</option>
              <option value="series">Series</option>
              <option value="new">New</option>
              <option value="popular">Popular</option>
              <option value="list">My List</option>
            </select>
          </div>
        )

      }
      <img src={featured?.two} />
      <div className="info">

        <div className="wrapper">
	        <h1>{splitCamelCase(featured?.name)}</h1>
        </div>

        <span className='desc'>{ featured?.bio }</span>
      
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span onClick={handlePlayClick}>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span onClick={handleInfoClick}>Info</span>
          </button>
        </div>
      </div>
    </div>
   )
 }

export default Featured
