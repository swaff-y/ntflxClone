import React, { useState } from 'react';
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = ({ setSelectionType }) => {
  const [ isScrolled, setIsScrolled ] = useState(false);

  window.onscroll = () => {
    setIsScrolled(!(window.pageYOffset === 0));
    return () => window.onscroll = null;
  }

  const handleSelection = (e) => {
    const value = e.target?.attributes?.action?.nodeValue || "";
    setSelectionType(value);
  }

   return(
    <div
      className={isScrolled ? "navbar scrolled" : "navbar"}
      data-test="component-navbar"
    >
        <div className='container'>
          <div className='left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
            <span onClick={handleSelection} action="stars" >Stars</span>
            <span onClick={handleSelection} action="movies" >Movies</span>
            <span onClick={handleSelection} action="new" >New</span>
            <span onClick={handleSelection} action="popular" >Popular</span>
            <span onClick={handleSelection} action="favorite" >My List</span>
          </div>
          <div className='right'>
            <Search className="icon"/>
            <Notifications className="icon" />
            <img src="https://avatars.githubusercontent.com/u/72368535?s=400&u=20eeecfe9dd1f5a481917319985b2de6d695a80c&v=4" />
            <div className="profile">
              <ArrowDropDown className="icon" />
              <div className="options">
                <span>settings</span>
                <span>logout</span>
              </div>
            </div>
          </div>
        </div>
    </div>
   )
 }

export default Navbar
