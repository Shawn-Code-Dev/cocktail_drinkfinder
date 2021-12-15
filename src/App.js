import React from 'react'
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'

import Navbar from './components/Navbar'
import About from './components/pages/About'
import Home from './components/pages/Home'
import DrinkDetail from './components/drink/DrinkDetail'


function App() {
  return (
    <Router>
      <div className='app'>
        <Navbar />
        <div className='container'>
          <Routes>
            <Route path='/' element={<Home />} />
            <Route path='/about' element={<About />} />
            <Route path='/drink/:id' element={<DrinkDetail />} />
          </Routes> 
        </div>
      </div>
    </Router>
  );
}

export default App
