import React, { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import Button from '../../components/button/Button';
import Quantity from '../../components/quantity/Quantity';

export default function ProductDatailsPage({ setMyCart, onSubmit }) {
    const [quantityValue, setQuantityValue] = useState(1);
    const location = useLocation();
    const data = location.state;
    console.log(data);
    return (
        <>
            <div class="card text-center \">
                <div class="card-header">
                <h1>Product Detail Page</h1>
                </div>
                <div class="card-body">
                    <h5 class="card-title"><h1>{data.name}</h1></h5>
                    <div class="card-text">
                    <img src={data.imageLink} alt="" width={500} style={{borderRadius: '30px'}} />
                    <p className='mt-2' style={{width: '500px', textAlign: 'center', position: 'relative', left: '700px'}}>{data.longDescription}</p>
                    <h3><span>Price:</span>{data.price}</h3>
                    <Quantity quantityValue={setQuantityValue}></Quantity>
                    </div>
                    <Link to='/detail/shoppinCart'><Button onClick={() => {if(quantityValue>0){ onSubmit(data, quantityValue)}}} type='primaryBtn'>Add to Cart</Button></Link>
                </div>
            </div>
        </>
    )
}
