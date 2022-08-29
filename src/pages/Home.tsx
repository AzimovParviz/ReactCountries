import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import Button from '@mui/material/Button'

import { Country, AppState } from '../types'
import { addCountry, removeCountry } from '../redux/actions/country'

const names = ['Apple', 'Orange', 'Avocado', 'Banana', 'Cucumber', 'Carrot']

export default function Home() {
  const dispatch = useDispatch()
  const countries = useSelector((state: AppState) => state.country.inCart)

  const handleAddcountry = () => {
    const country: Country = {
      id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      population: '100000',
      currency: ['1', '2'],
    }
    dispatch(addCountry(country))
  }

  return (
    <>
      <h1>Home page</h1>
      {countries.length <= 0 && <div>No countries in cart</div>}
      <ul>
        {countries.map((p) => (
          <li key={p.id}>
            <Link
              to={`/countries/${p.id}`}
            >{`${p.name} - $${p.population}`}</Link>
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(removeCountry(p))}
            >
              Remove
            </Button>
          </li>
        ))}
      </ul>
      <Button onClick={handleAddcountry} variant="contained">
        Add country
      </Button>
    </>
  )
}
