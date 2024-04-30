import React from 'react';
import { Link, useLocation } from 'react-router-dom';

function Card({ title, imageUrl, description, link }) {
  const location = useLocation();

  // Check if the current location's pathname is the homepage
  const isHomePage = location.pathname === "/";

  return (
    <>
      <div className="card">
        <img src={imageUrl} width="300px" height="200px" alt={title} />
        <div className="container">
          <h4><b>{title}</b></h4>
          <p>{description}</p>
          {isHomePage && <Link to={link}>Explore More</Link>}
        </div>
      </div>
    </>
  );
}

export default Card;
