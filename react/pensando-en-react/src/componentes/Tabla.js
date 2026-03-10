import FilaCategoria from "./FilaCategoria";
import FilaProducto from "./FilaProducto";

export default function Tabla({ productos }) {
    let categoria;

    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                {productos.map(producto =>
                    <>
                        {producto.category !== categoria ? <FilaCategoria titulo={categoria = producto.category} /> : ''}
                        <FilaProducto nombre={producto.name} precio={producto.price} sinStock={!producto.stocked} />
                    </>
                )}
            </tbody>
        </table>
    );
}