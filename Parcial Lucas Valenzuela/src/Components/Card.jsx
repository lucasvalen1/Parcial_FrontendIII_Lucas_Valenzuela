import React from 'react';

const Card = ({ valor1, valor2 }) => {
    return (
        <div className="card">
            <h2>Revisemos las mejores bandas del mundo</h2>
            <p>Banda #1: {valor1}</p>
            <p>Banda #2: {valor2}</p>
        </div>
    );
};

export default Card;