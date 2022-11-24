import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import CourseDetails from "./pages/CourseDetails";
import ElectiveDetails from "./pages/ElectiveDetails";
import SelectPath from "./pages/SelectPath";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<SelectPath />} />
        <Route path="/:path" element={<Home />} />
        <Route path="/elective-details/:id" element={<ElectiveDetails />} />
        <Route path="/course-details/:id" element={<CourseDetails />} />
      </Routes>
    </Router>
  );
}

export default App;
