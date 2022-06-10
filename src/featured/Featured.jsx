import { InfoOutlined, PlayArrow } from '@material-ui/icons';
import React from 'react';
import "./featured.scss";

const Featured = ({type}) => {
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
      <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg" />
      <div className="info">
        <img src="https://www.logolynx.com/images/logolynx/81/813a51d58c8e1ad76529f777e94f295a.png" />
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
