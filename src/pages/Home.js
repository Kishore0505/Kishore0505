import React from "react";
import { Link } from "react-router-dom";
import BannerImage from "../assets/coffee.jpg";
import "../styles/Home.css";

function Home() {
  return (
    <div className="home" style={{ backgroundImage: `url(${BannerImage})` }}>
      <div className="headerContainer">
        <h1 align="right">VCET CAFETERIA</h1>
        <p align="right">Where every flavour tells a story</p>
        <Link to="/menu">
          <button> ORDER NOW </button>
        </Link>
      </div>
    </div>
  );
}

export default Home;
