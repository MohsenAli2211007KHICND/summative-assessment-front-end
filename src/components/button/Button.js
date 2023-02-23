import React from 'react'
import './Button.css'

export default function Button(
    {
        type,
        onClick,
        children
    }
) {
  return (
    <>
      <button className={`${type}`} onClick={onClick}>{children}</button>
    </>
  )
}
