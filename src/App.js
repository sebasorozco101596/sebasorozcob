import React from 'react'

import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Main from './components/main'
import Programmer from '../src/programmer/programmer'
import Photography from '../src/photography/photography'

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/programmer" element={<Programmer />} />
        <Route path="/photography" element={<Photography />} />
      </Routes>
    </Router>
  );
}

export default App