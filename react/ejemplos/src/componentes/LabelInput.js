export default function LabelInput({ identificador, etiqueta, valor, onCambio }) {
    return (
        <div>
            <label for={identificador}>{etiqueta}</label>
            <input placeholder={etiqueta} id={identificador} value={valor} onInput={e => onCambio(e.target.value)} />
        </div>
    );
}