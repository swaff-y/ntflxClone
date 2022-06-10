import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useState } from 'react';
import "./listItem.scss";

const ListItem = ({ index }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const trailer = "https://www.dofactory.com/media/movie.mp4";

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
        <img src="https://images.pexels.com/photos/593172/pexels-photo-593172.jpeg" alt="" />
       
        { 
          isHovered 
          && 
          (
            <>
              <video src={trailer} autoPlay={true} loop/>
              <div className="infoItem">
                <div className="icons">
                  <PlayArrow className='icon' />
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
