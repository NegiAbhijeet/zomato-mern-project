import React, { useEffect, useState } from "react";
import "./home.css";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [videos, setVideos] = useState([]);

  useEffect(() => {
    axios
      .get("http://localhost:3000/api/food")
      .then((response) => {
        setVideos(response.data.foodItems);
      },Credentials)
      .catch((error) => {
        console.error("Error fetching food items:", error);
      });
  }, []);

  return (
    <div className="reels-container">
      {videos.map((item) => (
        <div className="reel" key={item._id}>
          <video
            src={item.video}
            className="reel-video"
            autoPlay
            muted
            loop
            playsInline
          />

          {/* Overlay Content */}
          <div className="reel-overlay">
            <p className="reel-description">{item.description}</p>
            <Link
              className="reel-btn"
              to={`/food-partner/${item.foodpartner}`}
              aria-label="Visit Store"
            >
              Visit Store
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
