import React, { useState } from 'react';

const Form = ({ onSubmit }) => {
    const [valor1, setValor1] = useState('');
    const [valor2, setValor2] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        if (valor1.length >= 3 && valor1[0] !== ' ' && valor2.length >= 6) {
            setError('');
            onSubmit({ valor1, valor2 });
        } else {
            setError('Por favor chequea que la informacion sea correcta');
        }
    };

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    value={valor1}
                    onChange={(e) => setValor1(e.target.value)}
                    placeholder="Mejor banda de la historia"
                />
                <input
                    type="text"
                    value={valor2}
                    onChange={(e) => setValor2(e.target.value)}
                    placeholder="Segunda mejor banda de la historia"
                />
                <button type="submit">Enviar</button>
            </form>
            {error && <p style={{ color: 'red' }}>{error}</p>}
        </div>
    );
};

export default Form;