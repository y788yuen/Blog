import "./Xblog.css"
import React from 'react';
import icon from './icon.jpg';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";

export function Xblog3() {
    return (
      <div className="post">
        <img
        className="postImg"
        src= "https://cdn.discordapp.com/attachments/1072791750713823316/1091265309949820978/mqdefault.jpg"
        />
        <div className="postInfo">
            <span className="postTitle">
            <Link to="/goXblogtail3" >The Perfect Hamster Hideaway</Link>
            </span>
            <span className="postDate">MARCH 28, 2023</span>
            
        </div>
          <p className="postDesc">
          Hamsters are small, curious creatures that love to explore and nest. Providing a comfortable and safe hideaway is essential for your pet's happiness. Use natural materials like untreated wood, cardboard,
          or coconut shells to create a cozy haven. Make sure the hideaway has multiple entrances and is large enough for your hamster to move around easily.
          A well-designed hamster hideaway will not only give your furry friend a sense of security but also stimulate their natural instincts.
        </p>
      </div>
    );
  }
  
  export default Xblog3;