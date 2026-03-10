export default function FilaProducto({nombre, precio, sinStock}) {
    return (
        <tr>
            <td>
                <span style={{ color: sinStock ? 'red' : 'black' }}>
                    {nombre}
                </span>
            </td>
            <td>
                {precio}€
            </td>
        </tr>
    );
}