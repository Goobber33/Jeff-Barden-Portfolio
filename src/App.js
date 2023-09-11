import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Home from '../src/components/home';


function App() {
  return (
    <Router>
      <div>
        {/* Add your header or navbar here */}
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
        {/* Add your footer here */}
      </div>
    </Router>
  );
}

export default App;
