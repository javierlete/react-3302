import './App.css';

function App() {
  return (
    <>
      <form>
        <input type="text" placeholder="Buscar..." />
        <label>
          <input type="checkbox" />
          {' '}
          Mostrar solo productos en stock
        </label>
      </form>

      <table>
        <thead>
          <tr>
            <th>Nombre</th>
            <th>Precio</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <th colSpan="2">
              Fruta
            </th>
          </tr>
          <tr>
            <td>Manzana</td>
            <td>1€</td>
          </tr>
          <tr>
            <td>Naranja</td>
            <td>1€</td>
          </tr>
          <tr>
            <td>
              <span style={{ color: 'red' }}>
                Maracuyá
              </span>
            </td>
            <td>
              2€
            </td>
          </tr>
        </tbody>
      </table>
    </>
  );
}

export default App;

