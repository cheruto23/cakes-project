import React from 'react';
import CakeItem from './CakeItem';

const Home = ({ cakes, removeCake, editCake }) => (
  <div>
    <h2>Cakes</h2>
    <ul>
      {cakes.map((cake) => (
        <CakeItem
          key={cake.id}
          cake={cake}
          onRemove={() => removeCake(cake.id)}
          onEdit={() => editCake(cake.id)} 
        />
      ))}
    </ul>
  </div>
);

export default Home;
