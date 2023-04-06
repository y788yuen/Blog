
import Xblog from "./Xblog";
import Xblog2 from "./Xblog2";
import Xblog3 from "./Xblog3";
import React from 'react';
import "./Xblogs.css";

export function Xblogs() {
    return (
    <div className="Xblogs">
      <Xblog/>
      <Xblog2/>
      <Xblog3/>
    </div>
  );
}

export default Xblogs;