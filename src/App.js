import "bootstrap/dist/css/bootstrap.min.css";
import './App.css';
import Fuck from './Fuck';
import GPfooter from "./Fuckfooter";
import Xblogs from "./Xblogs";
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import Xblogtail from "./Xblogtail";
import Xblogtail2 from "./Xblogtail2";
import Xblogtail3 from "./Xblogtail3";
import Xblog from "./Xblog";


function App() {
  return (

    <div>

      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Xblogs />} />
          <Route path="/goXblogtail" element={<Xblogtail />} />
          <Route path="/goXblogtail2" element={<Xblogtail2 />} />
          <Route path="/goXblogtail3" element={<Xblogtail3 />} />
          <Route path="/goXblogs" element={<Xblogs />} />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;
