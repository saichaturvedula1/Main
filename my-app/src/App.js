import logo from './logo.svg';
import './App.css';

function App() {
  const products = [
    { id: "1", name: 'product 1', price: 100 },
    { id: "2", name: 'product 2', price: 200 },
    { id: "3", name: 'product 3', price: 300 },
    { id: "3", name: 'product 3', price: 400 },
  ]
  const totalPrice = products.reduce((acc, product) => acc + product.price , 0);
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ul>
          {products.map(product => (<li key={product.id}>{product.name}: {product.price}</li>))}
        </ul>
        <p>Total Price of all products: {totalPrice}</p>
      </header>
    </div>
  );
}

export default App;
