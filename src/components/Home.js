import React from 'react';
import CakeItem from './CakeItem';

const Home = ({ cakes, removeCake, editCake }) => (
  <div>
    <h2>Cakes</h2>
    <ul>
      {Array.isArray(cakes) && cakes.length > 0 ? (
        cakes.map((cake) => (
          <CakeItem
            key={cake.id}
            cake={cake}
            onRemove={() => removeCake(cake.id)}
            onEdit={() => editCake(cake.id)} 
          />
        ))
      ) : (
        <p>No cakes available</p>
      )}
    </ul>
  </div>
);

export default Home;
