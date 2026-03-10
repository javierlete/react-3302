import { useState } from 'react';
import './Formulario.css';
import LabelInput from './LabelInput';

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [saludo, setSaludo] = useState('Pulsa el botón');

    return (
        <div className="formulario">
            <LabelInput etiqueta="Nombre" identificador="nombre" valor={nombre} onCambio={valor => setNombre(valor)} />
            <LabelInput etiqueta="Apellido" identificador="apellido" />

            <button onClick={() => setSaludo('Hola ' + nombre)}>Saludar</button>

            <p>{saludo}</p>
        </div>
    );
}