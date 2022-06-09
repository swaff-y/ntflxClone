import React, { useState } from 'react';
import "./navbar.scss";
import { ArrowDropDown, Notifications, Search } from '@material-ui/icons';

const Navbar = (props) => {
  const [ isScrolled, setIsScrolled ] = useState(false);

  window.onscroll = () => {
    setIsScrolled(!(window.pageYOffset === 0));
    return () => window.onscroll = null;
  }

  console.log(`%c${isScrolled}`, "color: orange;");

   return(
    <div
      className={isScrolled ? "navbar scrolled" : "navbar"}
      data-test="component-navbar"
    >
        <div className='container'>
          <div className='left'>
            <img src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg" />
            <span>Homepage</span>
            <span>Series</span>
            <span>Movies</span>
            <span>New and Popular</span>
            <span>My List</span>
          </div>
          <div className='right'>
            <Search className="icon"/>
            <span>KID</span>
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
