import React from 'react';
import Navbar from '../components/navbar/Navbar';
import "./home.scss";

const Home = (props) => {
   return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <Navbar />
      <img src="https://images.pexels.com/photos/1149137/pexels-photo-1149137.jpeg"/>
    </div>
   )
 }

export default Home
