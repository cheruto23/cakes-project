import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import Home from './components/Home';
import AddCake from './components/AddCake';
import {BASE_URL} from './components/Utils';
const App = () => {
  const [cakes, setCakes] = useState([]);

  useEffect(() => {
    
    fetch(BASE_URL)
      .then((response) => response.json())
      .then((data) => setCakes(data))
      .catch((error) => console.error('Error fetching cakes:', error));
  }, []);

  const addCake = async (newCakeData) => {
    try {
      const response = await fetch(BASE_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(newCakeData),
      });
  
      if (!response.ok) {
        const error = await response.json();
        throw new Error(`Failed to add cake: ${error}`);
      }
  
      const addedCake = await response.json();
  
      setCakes((prevCakes) => [...prevCakes, addedCake]);
    } catch (error) {
      console.error('Error adding cake:', error.message);
    }
  };
  
  

  const removeCake = (index, id) => {
    fetch(`${BASE_URL}/${id}`, {
      method: 'DELETE',
    })
      .then((response) => response.json())
      .then(() => {
        const updatedCakes = [...cakes];
        updatedCakes.splice(index, 1);
        setCakes(updatedCakes);
      })
      .catch((error) => console.error('Error removing cake:', error));
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
