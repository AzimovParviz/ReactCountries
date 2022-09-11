import React from 'react'
import { useParams, useHistory } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import { AppState } from '../types'
import { Button } from '@mui/material'
import { AddShoppingCart, KeyboardDoubleArrowLeft } from '@mui/icons-material'
import { Card, CardHeader, CardContent } from '@mui/material'
import { addCountry } from '../redux/actions/'

export default function Country() {
  const { id } = useParams<{ id: string }>()
  const dispatch = useDispatch()
  const history = useHistory()
  const country = useSelector((state: AppState) =>
    state.country.exists.find((c) => c.name.common === id)
  )

  if (!country) {
    return (
      <div>
        country does not exist
        <Button onClick={() => history.goBack()}>Back to home</Button>
      </div>
    )
  }

  return (
    <div>
      <h1>country page</h1>
      <Button onClick={() => history.goBack()}>
        <KeyboardDoubleArrowLeft /> Back to home
      </Button>
      <Card>
        <CardHeader
          style={{ backgroundColor: 'grey' }}
          title={country.name.common}
          subheader={country.region}
        />
        <CardContent style={{ backgroundColor: 'grey' }}>
          <img src={country.flags.png} alt={`flag of ${country.name.common}`} />
          <br></br>
          {`${country.name.official}, there are ${country.population} people living there`}
        </CardContent>
      </Card>
      <Button variant="outlined" onClick={() => dispatch(addCountry(country))}>
        Add to Cart <AddShoppingCart />
      </Button>
    </div>
  )
}
