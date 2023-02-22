import React from 'react'
import Button from '../../components/button/Button'
import { mockData } from '../../mockData/MockData'
export default function ProductsMainPage({
}) {
    return (
        <div>
            <table>
                <thead>
                </thead>
                <tbody>
                    {
                        mockData.map(item =>{
                             return <div  style={{borderBottom: '3px solid #6F732F'}}>
                                <tr key={item.id}>
                                <td><img src={item.image} alt={item.name}  width={120}/></td>
                                <td>{item.name}</td>
                                <td>{item.shortDescription}</td>
                                <td>{item.price}</td>
                                <td>{`quantity: ${item.id}`}</td>
                                <td><Button type='primary'>Add to Cart</Button></td>
                            </tr>
                             </div>
                             
                             
                        })
                    }

                </tbody>
            </table>

        </div>
    )
}
