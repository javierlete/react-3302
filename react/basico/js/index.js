function App() {
    return (
        <div>
            <Titulo texto="Hola a todos" />
            <Titulo texto="¿Qué tal?" />
            <p>Esto funciona solo con etiquetas &lt;script&gt;.</p>
        </div>
    );
}

function Titulo(props) {
    return <h1 className="titulo" style={{ backgroundColor: 'black' }}>
        {props.texto}
    </h1>;
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);