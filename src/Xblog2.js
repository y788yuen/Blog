import "./Xblog.css"
import React from 'react';
import icon from './icon.jpg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function Xblog2() {
    return (
      <div className="post">
        <img
        className="postImg"
        src= "https://i.imgur.com/LVWqrvJ.jpg"
        />
        <div className="postInfo">
            <span className="postTitle">
            <Link to="/goXblogtail2" >Nutritious Hamster Treats</Link>
            </span>
            <span className="postDate">MARCH 28, 2023</span>
        </div>
          <p className="postDesc">
          Offering your hamster nutritious treats is a great way to bond and enhance their diet. In addition to their regular food, consider providing small amounts of fresh fruits and vegetables, such as apple slices, carrot pieces, or leafy greens. Always introduce new foods gradually and avoid sugary or fatty treats. Remember to remove uneaten fresh foods to prevent spoilage. A balanced diet with occasional treats will keep your hamster healthy and satisfied, ensuring a happy, long life.
        </p>
      </div>
    );
  }
  
  export default Xblog2;