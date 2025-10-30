import React, { useState } from 'react';

function Data() {
  const [login, setLogin] = useState(false);

  const products = [
    { id: 1, name: 'apple', price: 3500 },
    { id: 2, name: 'redmi', price: 6500 },
    { id: 3, name: 'samsung', price: 2500 }
  ];

  const handleLogin = () => {
    setLogin(!login);
  };

  return (
    <div>
      <button onClick={handleLogin}>
        {login ? 'Hide Products' : 'Show Products'}
      </button>

      {login ? (
        <>
          {products.map((post) => (
            <div key={post.id}>
              <h2>Name: {post.name}</h2>
              <h3>Price: {post.price}</h3>
            </div>
          ))}
        </>
      ) : (
        <p>No access to get product, please login</p>
      )}
    </div>
  );
}

export default Data;
