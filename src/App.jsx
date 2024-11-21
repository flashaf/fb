import React, { useState, useEffect } from "react";
import Signup from "./components/Signup";
import { BrowserRouter as Router } from "react-router-dom";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div>
        <section>
          <Routes>
            {" "}
            <Route path="/" element={<Signup />} />
          </Routes>
        </section>
      </div>
    </Router>
  );
}

export default App;
