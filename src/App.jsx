import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import LoginSignup from "./pages/LoginSignup"; // ✅ only this
import MovieSearch from "./pages/MovieSearch";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LoginSignup />} />
        <Route path="/search" element={<MovieSearch />} />
      </Routes>
    </Router>
  );
}

export default App;
