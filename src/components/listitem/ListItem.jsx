import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import "./listItem.scss";

const BUCKET_URL = process.env.REACT_APP_BUCKET_URL;

const ListItem = ({ index, data, url }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const trailer = url ? BUCKET_URL + url : "https://www.dofactory.com/media/movie.mp4";
  let navigate = useNavigate();

  const handleClick = (url) => {
    navigate("/watch/new", {replace: true, state: { url } });
  }

  console.log(`%cThe BUCKET`,"color:lightblue;font-size:20px",trailer);

   return(
    <div
      className="listItem"
      data-test="component-listItem"
      onMouseEnter={()=>setIsHovered(true)}
      onMouseLeave={()=>setIsHovered(false)}
      style={{
        left: isHovered && (((index * 225) - 50) + (index * 2.5)),
        zIndex: isHovered ? 10 : 1
      }}
    >
        <video className="sample" src={trailer+"#t=30"} autoPlay={false} />
       
        { 
          isHovered 
          && 
          (
            <>
              <video className="smallPlay" src={trailer} autoPlay={true} loop/>
              <div className="infoItem">
                <div className="icons">
                  <PlayArrow className='icon' onClick={()=>handleClick(url)}/>
                  <Add className='icon' />
                  <ThumbUpAltOutlined className='icon' />
                  <ThumbDownAltOutlined className='icon' />
                </div>
                <div className="itemInfoTop">
                  <span>1 hour 14 min</span>
                  <span className='limit'>+16</span>
                  <span>1999</span>
                </div>
                <div className="desc">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                </div>
                <div className="genre">
                  Action
                </div>
            </div>
          </>
          )
        }
    </div>
   )
 }

export default ListItem
