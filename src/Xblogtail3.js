import { Link } from "react-router-dom";
import "./Xblogtail.css";
import icon from './icon.jpg';

export default function Xblogtail() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src= "https://cdn.discordapp.com/attachments/1072791750713823316/1091265309949820978/mqdefault.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Hamster Wheels for Happy Pets
        </h1>
        <div className="singlePostInfo">
          <span>MARCH 28, 2023</span>
        </div>
        <p className="singlePostDesc">
          Hamsters are small, curious creatures that love to explore and nest. Providing a comfortable and safe hideaway is essential for your pet's happiness. Use natural materials like untreated wood, cardboard,
          or coconut shells to create a cozy haven. Make sure the hideaway has multiple entrances and is large enough for your hamster to move around easily.
          A well-designed hamster hideaway will not only give your furry friend a sense of security but also stimulate their natural instincts.          <br />
          <br />
        </p>
        <h1 className="singlePostTitle">
          <Link to="/goXblogs">Back to blog</Link>
        </h1>
      </div>
    </div>
  );
}