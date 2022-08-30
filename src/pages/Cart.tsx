import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Cart() {
  const countries = useSelector((state: AppState) => state.country.inCart)
  console.log('cart is', countries)
  return (
    <>
      {countries.length <= 0 && <p>cart is empty</p>}
      {countries.length > 0 && <p>Contents of the cart:</p>}
      <ul>
        {countries.map((c) => (
          <li>{c.name.common}</li>
        ))}
      </ul>
    </>
  )
}
