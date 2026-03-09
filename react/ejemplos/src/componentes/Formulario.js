import { useState } from 'react';
import './Formulario.css';
import LabelInput from './LabelInput';

export default function Formulario() {
    const [nombre, setNombre] = useState('');
    const [saludo, setSaludo] = useState('Pulsa el botón');

    return (
        <div className="formulario">
            <LabelInput etiqueta="Nombre" identificador="nombre" />
            <LabelInput etiqueta="Apellido" identificador="apellido" />

            <input placeholder="Nombre" value={nombre} onInput={e => setNombre(e.target.value)} />

            <button onClick={() => setSaludo('Hola ' + nombre)}>Saludar</button>

            <p>{saludo}</p>
        </div>
    );
}