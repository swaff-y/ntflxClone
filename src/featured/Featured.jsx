import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { getFeatured, splitCamelCase } from '../helperFunctions';
import "./featured.scss";

const Featured = ({type}) => {
  const display = useSelector(state=>state.display.collection);
  const [ featured, setFeatured ] = useState({});

  useEffect(()=>{
    setFeatured(getFeatured(display));
  },[display])

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
            <span>
              {
                type === "movie"
                ?
                "Movies"
                :
                "Series"
              }
            </span>
            <select name="genre" id="genre" defaultValue={"Genre"}>
              <option disabled>Genre</option>
              <option value="adventure">Adventure</option>
              <option value="comedy">Comedy</option>
              <option value="crime">Crime</option>
            </select>
          </div>
        )

      }
      <img src={featured?.two} />
      <div className="info">

        <div className="wrapper">
	        <h1>{splitCamelCase(featured?.name)}</h1>
        </div>

        <span className='desc'>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Delectus reiciendis aut eaque, numquam corrupti obcaecati ipsa blanditiis asperiores veniam facilis pariatur rerum est. Explicabo distinctio voluptatum, facere saepe sed incidunt.</span>
      
        <div className="buttons">
          <button className="play">
            <PlayArrow />
            <span>Play</span>
          </button>
          <button className="more">
            <InfoOutlined />
            <span>Info</span>
          </button>
        </div>
      </div>
    </div>
   )
 }

export default Featured
