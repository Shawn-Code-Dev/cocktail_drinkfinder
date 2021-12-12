import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar';
import About from './components/pages/About';
import Home from './components/pages/Home';


function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
          </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App;
