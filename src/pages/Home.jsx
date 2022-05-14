import React from "react";
import { Link } from "react-router-dom";
import bannerImage from "../assets/pizza.jpeg";
import "../styles/Home.css";

const Home = () => {
  return (
    <div className="home" style={{ backgroundImage: `url(${bannerImage})` }}>
      <div className="headerContainer">
        <h1>Pizza Point</h1>
        <p>Your delicious pizza of all taste.</p>
        <Link to="/menu">
          <button>Order Now</button>
        </Link>
      </div>
    </div>
  );
};

export default Home;
