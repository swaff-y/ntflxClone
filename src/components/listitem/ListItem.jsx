import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import { getBio } from '../../redux/apiCall';
import { checkDescription, getBioFromHTML } from '../../helperFunctions';
import "./listItem.scss";

const BUCKET_URL = process.env.REACT_APP_BUCKET_URL;

const ListItem = ({ index, data, url }) => {
  const [ isHovered, setIsHovered ] = useState(false);
  const [ desc, setDesc ] = useState("");
  const trailer = BUCKET_URL + url;
  let navigate = useNavigate();

  const handleClick = (data) => {
    navigate(`/watch/${data._id}`, {replace: true, state: { url } });
  }

  console.log(`%cThe DESCRIPTION`,"color:lightblue;font-size:20px",desc);

  useEffect(()=>{
    function gotRes(res){
      setDesc(res);
    }
    let res = checkDescription(data?.name, data, gotRes);
  },[data?.name])

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
      {
        data.two
        ?
        <img className="sample" src={data.two} alt="" />
        :
        <video className="sample" src={trailer+"#t=30"} autoPlay={false} />
      }
        
        { 
          isHovered 
          && 
          (
            <>
              <video className="smallPlay" src={trailer} autoPlay={true} loop/>
              <div className="infoItem">
                <div className="icons">
                  <PlayArrow className='icon' onClick={()=>handleClick(data)}/>
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
