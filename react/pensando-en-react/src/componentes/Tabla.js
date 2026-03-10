import FilaCategoria from "./FilaCategoria";
import FilaProducto from "./FilaProducto";

export default function Tabla() {
    return (
        <table>
            <thead>
                <tr>
                    <th>Nombre</th>
                    <th>Precio</th>
                </tr>
            </thead>
            <tbody>
                <FilaCategoria />
                <FilaProducto />
                <FilaProducto />
                <FilaProducto />
                <FilaCategoria />
                <FilaProducto />
                <FilaProducto />
                
            </tbody>
        </table>
    );
}