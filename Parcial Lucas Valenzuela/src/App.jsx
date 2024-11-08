import React, { useState } from 'react';
import Form from './Form';
import Card from './Components/Card';

const App = () => {
    const [data, setData] = useState(null);

    const handleFormSubmit = (formData) => {
        setData(formData);
    };

    return (
        <div className="App">
            <h1>Bienvenido, ingresa tus dos bandas  musicales favoritas</h1>
            <h2>(Como requisito minimo necesitas tres caracteres en el primer imput y seis en la segunda)</h2>
            <Form onSubmit={handleFormSubmit} />
            {data && <Card valor1={data.valor1} valor2={data.valor2} />}
        </div>
    );
};

export default App;
