import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "../components/Home";
import Bounties from "../components/Bounties";

export default (
  <Router>
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/bounties" element={<Bounties />} />
    </Routes>
  </Router>
);