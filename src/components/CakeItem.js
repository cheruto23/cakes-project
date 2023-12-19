import React from 'react';

const CakeItem = ({ cake, onRemove }) => (
  <li className="list-group-item d-flex align-items-center">
    <img
      src={cake.imageUrl}
      alt={cake.category}
      style={{ width: '150px', height: '200px', marginRight: '10px' }}
                                                                                                               
    />
    <div>
      <p className="mb-0">
        {cake.category} <br/>{cake.flavor} <br/> ksh.{cake.price}
      </p>
      <button className="btn btn-danger btn-sm mt-2" onClick={() => onRemove(cake)}>
        Remove
      </button>
    </div>
  </li>
);

export default CakeItem;
