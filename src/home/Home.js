import React from 'react';
import Navbar from '../components/navbar/Navbar';
import Featured from '../featured/Featured';
import "./home.scss";

const Home = (props) => {
   return(
    <div
      className="home__container"
      data-test="component-home"
    >
      <Navbar />
      <Featured />
    </div>
   )
 }

export default Home
