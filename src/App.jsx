import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home/Homescreen";
import Navbar from "./Pages/Home/Navbar";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="*" element={<div>404 Not found</div>}></Route>
          </Routes>
        </div>
      </Router>
    </div>
  );
}

export default App;
