import { Link } from "react-router-dom";
import "./Xblogtail.css";
import icon from './icon.jpg';

export default function Xblogtail() {
  return (
    <div className="singlePost">
      <div className="singlePostWrapper">
        <img
          className="singlePostImg"
          src= "https://i.imgur.com/LVWqrvJ.jpg"
          alt=""
        />
        <h1 className="singlePostTitle">
        Hamster Wheels for Happy Pets
        </h1>
        <div className="singlePostInfo">
          <span>MARCH 28, 2023</span>
        </div>
        <p className="singlePostDesc">
        Offering your hamster nutritious treats is a great way to bond and enhance their diet. In addition to their regular food, consider providing small amounts of fresh fruits and vegetables, such as apple slices, carrot pieces, or leafy greens. Always introduce new foods gradually and avoid sugary or fatty treats. Remember to remove uneaten fresh foods to prevent spoilage. A balanced diet with occasional treats will keep your hamster healthy and satisfied, ensuring a happy, long life.
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