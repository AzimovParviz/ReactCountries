import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'

import RemoveShoppingCart from '@mui/icons-material/RemoveShoppingCart'
import { Button } from '@mui/material'
import { removeCountry } from '../redux/actions/country'

export default function Cart() {
  const countries = useSelector((state: AppState) => state.country.inCart)
  const dispatch = useDispatch()
  console.log('cart is', countries)
  return (
    <>
      {countries.length <= 0 && <p>cart is empty</p>}
      {countries.length > 0 && <p>Contents of the cart:</p>}
      {countries.map((c) => (
        <div>
          <p>
            {c.name.common}{' '}
            <Button onClick={() => dispatch(removeCountry(c))}>
              Remove from cart
              <RemoveShoppingCart />
            </Button>
          </p>
        </div>
      ))}
    </>
  )
}
