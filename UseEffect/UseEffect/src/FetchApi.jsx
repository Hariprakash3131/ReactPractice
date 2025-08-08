import { useEffect, useState } from "react";


function FetchApi() {
  const [cart, setCartoons] = useState([]);

  useEffect(() => {
    fetch('http://localhost:4000/cartoons')
      .then(response => response.json())
      .then((data) => {
        console.log(data);
        setCartoons(data); 
      })
      .catch(err => {
        console.log(err);
      });
  }, []);

  return (
    <div className="container py-5">
      <h2 className="text-center mb-4">Cartoon Gallery</h2>
      <div className="row">
        {cart.map((item) => (
          <div key={item.id} className="col-md-4 col-lg-3 mb-4">
            <div className='card h-100 shadow-sm'>
           <img
  src={item.image}
  className="card-img-top p-3"
  alt={item.description}
  style={{ height: '200px', objectFit: 'contain' }}
/>

              <div className='card-body d-flex flex-column'>
                <h5 className='card-title'>{item.description}</h5>
                <p className='card-text'>{item.content}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default FetchApi;
