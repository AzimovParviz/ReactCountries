import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'
import {Button, TableContainer, TableCell, TableRow} from '@mui/material/'

import { Country, AppState } from '../types'
import { addCountry, removeCountry } from '../redux/actions/country'
import { useCountry } from '../hooks/useCountry'

export default function Home() {
  const dispatch = useDispatch()
  //const countries = useSelector((state: AppState) => state.country.inCart)
  const {countries, error} = useCountry()
  console.log(countries)
 /*  const handleAddcountry = () => {
    const country: Country = {
      id: (+new Date()).toString(),
      name: names[Math.floor(Math.random() * names.length)],
      population: '100000',
      currency: ['1', '2'],
    }
    dispatch(addCountry(country))
  }
 */
  return (
    <>
      <h1>Home page</h1>
      {error && <p>{error}</p>}
      <ul>
        {countries?.map((c: Country) => (
          <li key={c.name.common}>
            <Link
              to={`/countries/${c.name.common}`}
            >{`${c.name.common} - ${c.population} people`}</Link>
            <Button
              variant="outlined"
              color="error"
              onClick={() => dispatch(addCountry(c))}
            >
              Add to cart
            </Button>
          </li>
        ))}
      </ul>
    </>
  )
}
