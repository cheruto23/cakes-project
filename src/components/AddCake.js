import React, { useState } from 'react';

const AddCake = ({ addCake }) => {
  const [newCake, setNewCake] = useState({ category: '', flavor: '', price: '', imageUrl: '' });
  const [message, setMessage] = useState('');

  const handleAddCake = () => {
    if (
      newCake.category.trim() !== '' &&
      newCake.flavor.trim() !== '' &&
      newCake.price.trim() !== '' &&
      newCake.imageUrl.trim() !== ''
    ) {
      addCake(newCake);
      setNewCake({ category: '', flavor: '', price: '', imageUrl: '' });
      setMessage('Cake added successfully!');

      setTimeout(() => setMessage(''), 3000);
    } else {
      setMessage('Please fill in all fields.');
    }
  };

  return (
    <div className="container mt-4">
      <h2>Add Cake</h2>
      {message && <p className="text-success">{message}</p>}
      <div className="mb-3">
  <label className="form-label">category:</label>
  <input
    type="text"
    className="form-control"
    value={newCake.category}
    onChange={(e) => setNewCake({ ...newCake, category: e.target.value })} 
  />
</div>
      <div className="mb-3">
        <label className="form-label">Flavor:</label>
        <input
          type="text"
          className="form-control"
          value={newCake.flavor}
          onChange={(e) => setNewCake({ ...newCake, flavor: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Price:</label>
        <input
          type="number"
          className="form-control"
          value={newCake.price}
          onChange={(e) => setNewCake({ ...newCake, price: e.target.value })}
        />
      </div>
      <div className="mb-3">
        <label className="form-label">Image URL:</label>
        <input
          type="text"
          className="form-control"
          value={newCake.imageUrl}
          onChange={(e) => setNewCake({ ...newCake, imageUrl: e.target.value })}
        />
      </div>
      <button className="btn btn-primary" onClick={handleAddCake}>
        Add
      </button>
    </div>
  );
};

export default AddCake;
