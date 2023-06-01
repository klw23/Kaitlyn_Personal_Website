import React from 'react';
import Flower from '../Flower';
import Banner from '../Banner';
import './styles.css';

function Home() {
  return (
    <div className="container">
      <div className="banner-container">
      <div className="bannerr"><Banner /></div>
        <div className="top-left-flower"><Flower /></div>
        <div className="top-right-flower"><Flower /></div>
      </div>
    </div>
  );
}

export default Home;
