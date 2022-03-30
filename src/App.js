import React from 'react'

import { BrowserRouter as Router, Routes, Route} from "react-router-dom";
import Main from './components/main'
import Programmer from '../src/programmer/programmer'
import Photography from '../src/photography/photography'
import RestaurantApp from './web_apps/restaurant/RestaurantApp';
import SocialMediaApp from './web_apps/social_media/client/src/SocialMediaApp';

function App() {
  return (

    <Router>
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/programmer" element={<Programmer />} />
        <Route path="/photography" element={<Photography />} />
        <Route path="/restaurant" element={<RestaurantApp />} />
        <Route path="/social" element={<SocialMediaApp />} />
      </Routes>
    </Router>
  );
}

export default App