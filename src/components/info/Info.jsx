import { Add, PlayArrow, ThumbDownAltOutlined, ThumbUpAltOutlined } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate, useParams } from 'react-router';
import { getObj, putObj } from '../../redux/apiCall';
import "./info.scss";
import useWindowDimensions from '../../hooks/useWindowDimensions';

const BUCKET_URL = process.env.REACT_APP_BUCKET_URL;

const Info = (props) => {
  const dispatch = useDispatch();
  let navigate = useNavigate();
  const params = useParams();
  const watch = useSelector(state=>state.watch.collection);
  const { width, height } = useWindowDimensions();
  const [likeClicked, setLikeClicked ] = useState(false);
  const [dislikeClicked, setDislikeClicked ] = useState(false);

  useEffect(()=>{
    getObj(dispatch, params.id);
  },[params.id]);

  const handleClickBack = () => {
    navigate("/", {replace: true});
  }

  const handleClick = (data) => {
    navigate(`/watch/${data._id}`, {replace: true, state: { url: data.url } });
  }

  const handleCloseClick = (e) => {
    navigate(`/`, {replace: true });
  }

  const handleLikeClick = (e) => {
    let likeCount = watch.likeCount;
    likeCount++;
    putObj(params.id, { likeCount });
    setLikeClicked(true);
    setDislikeClicked(false);
  }
  const handleDislikeClick = (e) => {
    let likeCount = watch.likeCount;
    likeCount--;
    putObj(params.id, { likeCount });
    setDislikeClicked(true);
    setLikeClicked(false);
  }

   return(
    <div
      className="infoCont"
      data-test="component-info"
      style={{
        width: (width * 0.80),
        height: (height * 0.80),
        top: (height * 0.15),
        left: (width * 0.10)
      }}
    >
        <div className="close" onClick={handleCloseClick}>x</div>
        <video className="smallPlay" src={ BUCKET_URL + watch.url } autoPlay={true} loop/>
        <div className="infoItem">
          <div className="icons">
            <PlayArrow className='icon' onClick={()=>handleClick(watch)}/>
            <Add className='icon' />
            {
                    likeClicked
                    ?
                    <ThumbUpAltOutlined 
                      className='icon'
                      style={{
                        color: 'gray',
                        borderColor: "gray"
                      }}
                    />
                    :
                    <ThumbUpAltOutlined 
                      onClick={handleLikeClick} 
                      className='icon'
                    />
            }
            {
                    dislikeClicked
                    ?
                    <ThumbDownAltOutlined 
                      className='icon' 
                      style={{
                        color: 'gray',
                        borderColor: "gray"
                      }}
                    />
                    :
                    <ThumbDownAltOutlined 
                      onClick={handleDislikeClick} 
                      className='icon' 
                    />
            }
          </div>
          <div className="itemInfoTop">
            <span>{ watch.duration?.toString() } sec</span>
            <span className='limit'>+18</span>
            <span>{ new Date(Date.parse(watch.createdAt)).getFullYear() }</span>
          </div>
          <div className="desc">
            { watch.desc }
          </div>
          <div className="genre">
            Action
          </div>
        </div>
    </div>
   )
 }

export default Info
