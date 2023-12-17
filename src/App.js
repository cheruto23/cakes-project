import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AddCake from './components/AddCake';

const App = () => {
  const [cakes, setCakes] = useState([]);

  const addCake = (newCake) => {
    setCakes([...cakes, newCake]);
  };

  const removeCake = (index) => {
    const updatedCakes = [...cakes];
    updatedCakes.splice(index, 1);
    setCakes(updatedCakes);
  };

  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <ul className="navbar-nav">
            <li className="nav-item">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/add" className="nav-link">
                Add Cake
              </Link>
            </li>
          </ul>
        </nav>
        <Routes>
          <Route path="/" element={<Home cakes={cakes} removeCake={removeCake} />} />
          <Route path="/add" element={<AddCake addCake={addCake} />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
