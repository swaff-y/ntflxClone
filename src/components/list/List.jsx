import { ArrowBackIosOutlined, ArrowForwardIosOutlined } from '@material-ui/icons';
import React, { useEffect, useRef, useState } from 'react';
import ListItem from '../listitem/ListItem';
import "./list.scss";

const List = (props) => {
  const [isMovedLeft, setIsMovedLeft] = useState(false);
  const [isMovedRight, setIsMovedRight] = useState(true);
  const [click, setClick] = useState(0);
  const listRef = useRef();

  useEffect(()=>{
    let len = listRef.current.children.length;
    let wind = Math.floor(window.innerWidth / 230);
    if(click === 0){
      setIsMovedLeft(false)
    } else {
      setIsMovedLeft(true)
    }
    if(click === (len - wind)){
      setIsMovedRight(true)
    } else {
      setIsMovedRight(false)
    }

  },[click])

  const handleClick = (direction) => {
    let len = listRef.current.children.length;
    let wind = Math.floor(window.innerWidth / 230);
    if((direction === "left") && (click > 0)){
      let distance = listRef.current.getBoundingClientRect().x - 50;
      listRef.current.style.transform = `translateX(${230 + distance}px)`;
      setClick(click-1);
    }
    if((direction === "right") && (click < (len - wind))){
      let distance = listRef.current.getBoundingClientRect().x - 50;
      listRef.current.style.transform = `translateX(${-230 + distance}px)`;
      setClick(click+1);
    }
    // console.log(`%cThe Click`, "color:orange; font-size: 20px;", click, len);
  }

   return(
    <div
      className="list"
      data-test="component-list"
    >
      <span className="listTitle">Continue watching</span>
      <div className="wrapper">
        <ArrowBackIosOutlined 
          className="sliderArrow left" 
          onClick={()=>handleClick("left")} 
          style={
            isMovedLeft 
            ? {display: "" } 
            : { display: "none"}
          }
        />
          <div className="container" ref={listRef}>
            <ListItem index={0} />
            <ListItem index={1} />
            <ListItem index={2}/>
            <ListItem index={3}/>
            <ListItem index={4}/>
            <ListItem index={5}/>
            <ListItem index={6}/>
            <ListItem index={7}/>
            <ListItem index={8}/>
            <ListItem index={9}/>
            <ListItem index={10}/>
            <ListItem index={11}/>
            <ListItem index={12}/>
            <ListItem index={13}/>
          </div>
        <ArrowForwardIosOutlined 
          className="sliderArrow right" 
          onClick={()=>handleClick("right")}
          style={
            isMovedRight 
            ? {display: "none" } 
            : { display: ""}
          }/>
      </div>
    </div>
   )
 }

export default List
