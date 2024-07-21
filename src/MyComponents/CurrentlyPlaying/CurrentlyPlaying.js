import React, { useState, useEffect } from 'react';
import YouTube from 'react-youtube';
import "./CurrentlyPlaying.css";

import ReactPlayer from 'react-player';


export const CurrentlyPlaying = () => {
  const [products, setProducts] = useState([]);
    const [isLoading, setIsLoaded] = useState(false);

    useEffect(()=>{
        setTimeout(() => {
            setIsLoaded(true);
          }, 1500);
        
    },[]);

  useEffect(() => {
    fetch('https://jayeshcom-backend-production-d533.up.railway.app/api/products')
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error('Error fetching data:', error));
  }, []);

  return (
    <>
    <div className="container">
      
      <div className={`acc-content ${isLoading ? "active" : ""}`}>
      <div className="accordion acc" id="productAccordion" style={{margin:'2rem', transition:'2s ease'}}>
        {products.map((product, index) => (
          <div className="accordion-item" key={product._id}>
            <h2 className="accordion-header" id={`heading${index}`}>
              <button
                className="accordion-button d-flex justify-content-between align-items-center"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#collapse${index}`}
                aria-expanded={index === products.length - 1 ? "true" : "false"}
                aria-controls={`collapse${index}`}
              >
                <span>{product.name}</span>
                <span className={`badge ${product.status === 'completed' ? 'bg-success' : 'bg-secondary'}`} style={{margin: '0 20px'}}>
                  {product.status}
                </span>
              </button>
            </h2>
            <div
              id={`collapse${index}`}
              className={`accordion-collapse collapse ${index === products.length - 1 ? "show" : ""}`}
              aria-labelledby={`heading${index}`}
              data-bs-parent="#productAccordion"
            >
              <div className="accordion-body">
                <div class="video-container">
                    <iframe
                        src={`https://www.youtube.com/embed/${product.code}`}
                        allow="autoplay; encrypted-media"
                        allowfullscreen
                        title="video"
                    ></iframe>
                </div>

            </div>

            </div>
          </div>
        ))}
      </div>
      </div>
    </div>
    
    </>
  );
};


