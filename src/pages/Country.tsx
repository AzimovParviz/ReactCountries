import React from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { Button } from '@mui/material'
import { AddShoppingCart } from '@mui/icons-material'
import { addCountry } from '../redux/actions/'

export default function Country() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const country = useSelector((state: AppState) =>
    state.country.exists.find((c) => c.name.common === id)
  )

  if (!country) {
    return <div>country does not exist</div>
  }

  return (
    <div>
      <h1>country page</h1>
      <h2>{`${country.name.official}, there are ${country.population} people living there`}</h2>
      <Button variant="outlined" onClick={() => dispatch(addCountry(country))}>
        Add to Cart <AddShoppingCart />
      </Button>
    </div>
  )
}
