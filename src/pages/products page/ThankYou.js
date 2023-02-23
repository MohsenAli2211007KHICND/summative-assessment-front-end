import React from 'react'
import { Link } from 'react-router-dom'
import Button from '../../components/button/Button'

export default function ThankYou() {
  return (
    <div>
      <h1>Thanks for your order.</h1>
      <Link to='/'><Button type='primaryBtn' onClick={''}>Return to shopping</Button></Link>
    </div>
  )
}
