import "./App.css";
import { HashRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import ElectiveDetails from "./pages/ElectiveDetails";
import SelectPath from "./pages/SelectPath";
import { useState } from "react";

function App() {
  const [path, setPath] = useState();
  return (
    <Router>
      <Link to={`/home/${path}`}>Degree Navigator</Link>
      <Routes>
        <Route path="/" element={<SelectPath />} />
        <Route path="/home/:id" element={<Home setPath={setPath} />} />
        <Route path="/elective-details/:id" element={<ElectiveDetails />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
