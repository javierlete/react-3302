export default function LabelInput({ identificador, etiqueta }) {
    return (
        <div>
            <label for={identificador}>{etiqueta}</label>
            <input placeholder={etiqueta} id={identificador} />
        </div>
    );
}