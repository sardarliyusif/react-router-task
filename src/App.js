import { useState } from 'react'
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home";
import { About } from "./pages/About";
import { Profile } from "./pages/Profile";
import { Jobs } from "./pages/Jobs/index";
import { JobDetails } from "./pages/Jobs/:id";
import './App.css';

function App() {
  const [index, setIndex] = useState(3);

  const showMore = () => {
    setIndex((prev) => prev + 1);
  }

  return (
    <div className="App">
      <h1>greetings from app jsx</h1>

      <div></div>
      <div />

      <Routes>
        <Route path="/" index element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="profile" element={<Profile />} />
        <Route path="jobs" element={<Jobs showMore={showMore} index={index} />} />
        <Route path="jobs/:id" element={<JobDetails />} />
      </Routes>

    </div>
  );
}

export default App;
