import React, { useCallback, useEffect, useState } from 'react'
import { Link, useLocation } from 'react-router-dom';
import Button from '../../components/button/Button';

export default function ShoppingCart({ myCart, onDelete, onDeleteAll }) {
    const [total,setTotal] = useState(0);

    useEffect(()=>{
        let t =0;
        myCart.forEach((item)=> {
            t+= item.totalPrice;
            setTotal(t);
        }
        )
    },[])
    const handleDelete = (id) => {

        // const newCart = myCart.filter(item=> item.id !=id) 
        // setMyCart(newCart)
        // console.log();
    }
    return (
        <>
                    <h1>shopping Cart</h1>
         {
        myCart && myCart.map(item => {
                    return <div key={item.id} className="card border-success mb-3" style={{maxWidth: '50rem'}}>
                <div className="card-header bg-transparent border-success">{item.name}</div>
               
                <div className="card-body text-success" style={{display: 'flex'}}> 
                <img src={item.image} alt="" width={120} />
                    <h5 className="card-title"><span style={{color: '#0dcaf0'}}>Quantity:</span> {item.quantity}</h5>
                    <h5 className="card-text"><span style={{color: '#0dcaf0'}}>price:</span>  {item.price}</h5>
                    <h5 className="card-text"><span style={{color: '#0dcaf0'}}>Total price:</span>  {item.totalPrice}</h5>
                </div>
                <div className="card-footer bg-transparent border-success"> <Button type='dangerBtn' onClick={() => { onDelete(item.id) }}>Delete</Button></div>
            </div>
             })
            }
         
            <h2>Order Total:{total}</h2>
            <Link to='/'><Button type='primaryBtn' onClick={''}>Return to shopping</Button></Link>
            <Link to='/detail/shoppinCart/thanks'><Button type='primaryBtn' onClick={() => { onDeleteAll() }}>checkout</Button></Link>

        </>

    )
}
