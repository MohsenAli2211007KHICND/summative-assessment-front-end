import React, { useEffect, useMemo, useState } from 'react'

export default function productData(product) {
    const [products, setProducts] = useState([]);

    useEffect(() => {

        async function loadData() {
            const url = `http://localhost:8080/api/product/all`;
            const response = await fetch(url);
            const data = await response.json();
            setProducts(data);
        }


    }, [product]);
    return useMemo(() =>{
        return{
            products
        };
    },[products])
}