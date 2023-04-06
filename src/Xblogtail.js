import { Link } from "react-router-dom";
import "./Xblogtail.css";
import icon from './icon.jpg';

export default function Xblogtail() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src= {icon}
          alt=""
        />
        <h1 className="singlePostTitle">
        Hamster Wheels for Happy Pets
        </h1>
        <div className="singlePostInfo">
          <span>MARCH 28, 2023</span>
        </div>
        <p className="singlePostDesc">
        Exercise is vital for your hamster's health and well-being. A hamster wheel is an excellent addition to any habitat, allowing your pet to run and play to their heart's content. Choose a solid-surface wheel that prevents your hamster's feet from getting caught. Also, ensure the wheel is appropriately sized to avoid back strain. A well-maintained wheel will keep your hamster active, engaged, and entertained, contributing to their overall happiness.
          <br />
          <br />
        </p>
        <h1 className="singlePostTitle">
          <Link to="/goXblogs">Back to blog</Link>
        </h1>
      </div>
    </div>
  );
}