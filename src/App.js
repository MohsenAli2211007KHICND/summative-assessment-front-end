import logo from './logo.svg';
import './App.css';
import ProductsMainPage from './pages/products page/ProductsMainPage';
import { useState } from 'react';

function App() { 
  const [quantity, setQuantity] = useState(1);
  // const handleQuantity = () =>{ 
  //   setQuantity(quantity+1) 
  // }
  return (
    // <div><ProductsMainPage></ProductsMainPage></div>
    <div>
      <label htmlFor="">Quantity</label>
      <button onClick={() => { if(quantity>0){setQuantity(quantity-1)}}}>-</button>
      <span>{quantity}</span>
      <button onClick={() => { setQuantity(quantity+1)}}>+</button>
    </div>
  );
}

export default App;
