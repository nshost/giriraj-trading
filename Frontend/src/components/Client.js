// Client.js

import React from 'react';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import '../components/Client.css';

const Client = () => {
  const options = {
    loop: true,
    margin: 10,
    responsiveClass: true,
    responsive: {
      0: {
        items: 2,
      },
      600: {
        items: 3,
      },
      1000: {
        items: 5,
      },
    },
  };

  return (
    <section id="clients" className="clients">
      <div className="section-heading text-center">
        <h2>Clients</h2>
      </div>
      <div className="clients-area">
        <div className="container">
          <OwlCarousel className="owl-theme" {...options}>
            <div className="item">
              <a href="#">
                <img src="" alt="brand-image" />
              </a>
            </div>
            {/* Add more items here */}
          </OwlCarousel>
        </div>
      </div>
    </section>
  );
};

export default Client;
