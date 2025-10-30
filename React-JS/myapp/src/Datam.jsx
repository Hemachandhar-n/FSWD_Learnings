import React, { useEffect, useState } from 'react'

function Datam() {
  const [datum, setDatum] = useState([]);
  const [showProducts, setShowProducts] = useState(false);

  useEffect(() => {
    fetch("http://localhost:5000/shopping")
      .then((res) => res.json())
      .then((data) => setDatum(data))
      .catch(err => {
        console.log(err)
      });
  }, []); // ✅ added dependency array to prevent infinite fetch loop

  const handleLogin = () => {
    setShowProducts(!showProducts);
  };

  return (
    <div>
      <button onClick={handleLogin}>
        {showProducts ? 'Hide Products' : 'Show Products'}
      </button>

      {showProducts ? (
        <>
          {datum.map((post) => (
            <div key={post.id}className='border border-5 border-danger p-5' >
              <h2>Name: {post.product}</h2>
              <h3>Model: {post.model}</h3>
              <h3>Varient: {post.varient}</h3>
              <h3>Color: {post.color}</h3>
            </div>
          ))}
        </>
      ) : (
        <p>No access to get product, please login</p>
      )}
    </div>
  )
}

export default Datam;
