import React, { useState } from 'react'
import styles from './Quantity.module.css'

export default function Quantity({quantityValue}) {
    const [quantity, setQuantity] = useState(1);
    return (
        <>
            <span>Quantity</span>
            <button className={styles.btn} onClick={() => { if (quantity > 0) { setQuantity(quantity - 1) 
                quantityValue(quantity-1) } }}>-</button>
            <span style={{padding: '10px', fontSize: '17px'}}>{quantity}</span>
            <button className={styles.btn} onClick={() => { setQuantity(quantity + 1)  
            quantityValue(quantity+1)}}>+</button>

        </>
    )
}
