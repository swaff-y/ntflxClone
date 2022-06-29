import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { checkDescription } from '../../helperFunctions';
import useWindowDimensions from '../../hooks/useWindowDimensions';
import "./listItem.scss";

const BUCKET_URL = process.env.REACT_APP_BUCKET_URL;

const ListItem = ({ index, data, url }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ setIsClicked ] = useState("none");
  const [ desc, setDesc ] = useState("");
  const { width } = useWindowDimensions();
  const trailer = BUCKET_URL + url;
  let navigate = useNavigate();
  const videoEl = useRef(null);

  const handleClick = (data) => {
    navigate(`/watch/${data._id}`, {replace: true, state: { url } });
  }

  useEffect(()=>{
    function gotRes(res){
      setDesc(res);
    }
    let res = checkDescription(data?.name, data, gotRes);
  },[data?.name]);

  const handleMouseEnter = () => {
    if(width > 1180){
      setIsHovered(true);
    }
  }
  const handleClickBlock = (e) => {
    if(width <= 1180){
      navigate(`/info/${data._id}`, { replace: true });
      setIsClicked("");
    }
  }

   return(
    <div
      className="listItem"
      data-test="component-listItem"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={()=>setIsHovered(false)}
      onClick={handleClickBlock}
      style={{
        left: isHovered && (((index * 225) - 50) + (index * 2.5)),
        zIndex: isHovered ? 10 : 1
      }}
    >
      {
        data.two
        ?
        <img className="sample" src={ data.two } alt="" />
        :
        <video ref={videoEl} className="sample" src={trailer+"#t=30"} autoPlay={false} />
      }
        
        { 
          isHovered 
          && 
          (
            <>
              <video ref={videoEl} className="smallPlay" src={trailer} autoPlay={true} loop/>
              <div className="infoItem">
                <div className="icons">
                  <PlayArrow className='icon' onClick={()=>handleClick(data)}/>
                  <Add className='icon' />
                  <ThumbUpAltOutlined className='icon' />
                  <ThumbDownAltOutlined className='icon' />
                </div>
                <div className="itemInfoTop">
                  <span>{ Math.floor(videoEl?.current?.duration || 0) } sec</span>
                  <span className='limit'>+16</span>
                  <span>1999</span>
                </div>
                <div className="desc">
                  { desc }
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

// className="listItem"
// data-test="component-listItem"
// onMouseEnter={()=>setIsHovered(true)}
// onMouseLeave={()=>setIsHovered(false)}
// style={{
//   left: isHovered && (((index * 225) - 50) + (index * 2.5)),
//   zIndex: isHovered ? 10 : 1
// }}