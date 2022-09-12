import React from 'react';

import './style.css';

const Division = ({ children, cardText, weight, src }) => {
  const [showCard, setShowcard] = React.useState(false);

  return (
    <>
      <div className="biggest-container">
        <div
          className="div-container"
          onMouseEnter={() => {
            setShowcard(true);
          }}
          onMouseLeave={() => {
            setShowcard(false);
          }}
        >
          <img className="image" src={src} alt="poke"></img>
          <div className="characterDiv"> {children} </div>
          {showCard && (
            <span className="card">
              habitat : {cardText} <br />
              weight : {weight}kg
            </span>
          )}
        </div>
      </div>
    </>
  );
};

export default Division;
