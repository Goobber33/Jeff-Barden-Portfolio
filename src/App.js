import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Home from './components/Home';
import Contact from './components/Contact';

function App() {
  return (
    <Router>
      <div>
        <Home />
        <Contact />
      </div>
    </Router>
  );
}

export default App;
