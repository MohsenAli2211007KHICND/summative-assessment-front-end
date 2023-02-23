import logo from './logo.svg';
import './App.css';
import ProductsMainPage from './pages/products page/ProductsMainPage';
import { BrowserRouter, Route, Routes, useLocation } from 'react-router-dom';
import ProductDatailsPage from './pages/products page/ProductDatailsPage';
import ShoppingCart from './pages/shoppingCart/ShoppingCart';
import { useEffect, useState } from 'react';
import ThankYou from './pages/products page/ThankYou';
import Navbar from './pages/navbar/Navbar';
import "bootstrap/dist/css/bootstrap.min.css";
// Bootstrap Bundle JS
import "bootstrap/dist/js/bootstrap.bundle.min";

function App() {
  const [products, setProducts] = useState([])
  const [myCart, setMyCart] = useState([]);
  const [a,setA] = useState(0);

  useEffect(() => {

      async function loadProductData() {
          const url = `http://localhost:8080/api/product/all`;
          const response = await fetch(url);
          const data = await response.json();
          setProducts(data);
          console.log(products);
      } 
      loadProductData()
   }, []);
   useEffect(() => {

    async function loadCartData() {
        const url = `http://localhost:8081/api/cart/all`;
        const response = await fetch(url);
        const data = await response.json();
        setMyCart(data);
        // console.log('Cart '+data);
    } 
    loadCartData()
 }, [a]);


 const postCart = (myCart, quantityValue)=> {
    const myobj = {
      name: myCart.name,
      image: myCart.imageLink,
      quantity: quantityValue,
      price: myCart.price,
      totalPrice: myCart.price*quantityValue


    }
    fetch('http://localhost:8081/api/cart/add', {
      method: 'POST',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      },
      redirect: 'follow',
      referrerPolicy: 'no-referrer',
      body: JSON.stringify(myobj)
  })
  .then(response => response.json())
  .then(data => setMyCart(prev => [...prev, data]))
  
 }

const onSubmit = (data, quantityValue)=>{
postCart(data, quantityValue)
}
const onDelete = (id) =>{
  fetch(`http://localhost:8081/api/cart/${id}`, {
      method: 'Delete',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      }

  }).then(setA(a+1))
}
const onDeleteAll = () =>{
  fetch(`http://localhost:8081/api/cart/all`, {
      method: 'Delete',
      mode: 'cors',
      cache: 'no-cache',
      credentials: 'same-origin',
      headers: {
          'Content-Type': 'application/json',
      }

  }).then(setA(a+1))
}


// console.log("This is Cart"+myCart);
  return (
    <>
    <Navbar></Navbar>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<ProductsMainPage setMyCart={setMyCart} products={products} onSubmit={onSubmit}></ProductsMainPage>}></Route>
          <Route path='detail' element={<ProductDatailsPage setMyCart={setMyCart} onSubmit= {onSubmit}></ProductDatailsPage>}></Route>
          <Route path='/detail/shoppinCart' element={<ShoppingCart myCart={myCart} setMyCart={setMyCart} onDeleteAll={onDeleteAll} onDelete={onDelete}></ShoppingCart>}></Route>
          <Route path='/detail/shoppinCart/thanks' element={<ThankYou></ThankYou>}></Route>
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
