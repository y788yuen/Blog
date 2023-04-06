import "./Xblog.css"
import React from 'react';
import icon from './icon.jpg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function Xblog() {
    return (
      <div className="post">
        <img
        className="postImg"
        src= {icon}
        />
        <div className="postInfo">
            <span className="postTitle">
            <Link to="/goXblogtail" >Hamster Wheels for Happy Pets</Link>
            </span>
            <span className="postDate">MARCH 28, 2023</span>
        </div>
          <p className="postDesc">
          Exercise is vital for your hamster's health and well-being. A hamster wheel is an excellent addition to any habitat, allowing your pet to run and play to their heart's content. Choose a solid-surface wheel that prevents your hamster's feet from getting caught. Also, ensure the wheel is appropriately sized to avoid back strain. A well-maintained wheel will keep your hamster active, engaged, and entertained, contributing to their overall happiness.
        </p>
      </div>
    );
  }
  
  export default Xblog;