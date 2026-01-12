import React from "react";
import "./home.css";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useEffect,Link } from "react";
import { response } from "../../../../backend/src/app";
// const videos = [
//   {
//     id: 1,
//     src: "https://ik.imagekit.io/wbaq5tcxx/d3a08ca9-aa47-4fde-9487-92471ea7f08f_izDDSYSeY",
//     description:
//       "Delicious burgers at Food Hub. Fresh ingredients, fast delivery, and amazing taste you will never forget.",
//     storeUrl: "/store/1",
//   },
//   {
//     id: 2,
//     src: "https://ik.imagekit.io/wbaq5tcxx/d3a08ca9-aa47-4fde-9487-92471ea7f08f_izDDSYSeY",
//     description:
//       "Authentic Italian pizza made with love. Try our new cheese burst special today.",
//     storeUrl: "/store/2",
//   },
//   {
//     id: 3,
//     src: "https://ik.imagekit.io/wbaq5tcxx/d3a08ca9-aa47-4fde-9487-92471ea7f08f_izDDSYSeY",
//     description:
//       "Healthy bowls and smoothies. Perfect for your fitness and lifestyle goals.",
//     storeUrl: "/store/3",
//   },
// ];

const Home = () => {
  useEffect(()=>{
    axios.get("http://localhost:3000/api/food")
    .then(response=>{
      setVideos(response.data.foodItems)
    })
  })
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
            <Link className="reel-btn" to={"/food-partner/"+item.foodpartner} area-label="Visit Store">Visit Store</Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Home;
