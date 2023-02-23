import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import Button from '../../components/button/Button'
import Quantity from '../../components/quantity/Quantity';
import styles from './ProductMainPage.module.css'
export default function ProductsMainPage({ products, onSubmit }) {

    const [quantityValue, setQuantityValue] = useState(1);

    return (
        <div>
            <h1 className={styles.heading}>Products</h1>

            {
               products.length !== 0 ? products.map(data => {
                    return <div key={data.id} className={styles.card}>
                        <div style={{ display: 'flex', alignItems: 'center' }}>
                            <img src={data.imageLink} alt={data.name} className={styles.cardImg} width={250} />
                            <h3 className={styles.cardName}><Link to='detail' state={data}>{data.name}</Link></h3>
                        </div>
                        <div className={styles.desc}>
                            <p className={styles.cardDes}>{data.shortDescription}</p>
                            <span style={{ color: '#532e2e', fontWeight: '600' }}>Price: </span>{data.price}
                        </div>
                        <div style={{padding: '20px'}}>
                                <Quantity quantityValue={setQuantityValue}></Quantity>
                            <Link to='/detail/shoppinCart' ><Button onClick={() => {if(quantityValue>0){ onSubmit(data, quantityValue)}}} type='primaryBtn'>Add to Cart</Button></Link>
                        </div>
                    </div>

                }) : null
            }

        </div>
    )
}
