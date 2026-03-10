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
                <FilaCategoria titulo="Fruta" />
                <FilaProducto nombre="Plátano" precio="1" />
                <FilaProducto nombre="Naranja" precio="1" />
                <FilaProducto nombre="Maracuyá" precio="1" sinStock={true} />
                <FilaCategoria titulo="Verduras" />
                <FilaProducto nombre="Espinaca" precio="1" sinStock={true}  />
                <FilaProducto nombre="Guisantes" precio="1"  />
                
            </tbody>
        </table>
    );
}