import React from 'react'
import { Link } from 'react-router-dom'

import { useCountry } from '../hooks/useCountry'
import CountryTable from '../components/CountryTable'
import { useSelector } from 'react-redux'
import { AppState } from '../types'

import ShoppingCart from '@mui/icons-material/ShoppingCart'

/*
TODO:
remove from cart button / theme switching / filtering
 */

export default function Home() {
  const { countries, error } = useCountry()
  const countriesCart = useSelector((state: AppState) => state.country.inCart)
  return (
    <>
      <h1>Home page</h1>
      {error && <p>{error}</p>}
      <Link to={'/Cart'}>
        <ShoppingCart /> [{countriesCart.length}]
      </Link>
      {/*       <SearchBar /> */}
      {countries && <CountryTable countries={countries} />}
    </>
  )
}
