import React, { useContext } from 'react'
import { Link } from 'react-router-dom'

import { useCountry } from '../hooks/useCountry'
import CountryTable from '../components/CountryTable'
import { useSelector } from 'react-redux'
import { AppState } from '../types'

import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ThemeContext } from '../context/ThemeProvider'
import Button from '@mui/material/Button'

/*
TODO:
filtering, page for each country that a user can link to, infinite scrolling
 */

export default function Home() {
  const { theme, toggleTheme } = useContext(ThemeContext)
  const { countries, error } = useCountry()
  const countriesExist = useSelector((state: AppState) => state.country.exists)
  console.log(countriesExist)
  const countriesCart = useSelector((state: AppState) => state.country.inCart)
  /*   const filter: Country[] = [] //for search filtering and/or infinite scrolling */
  return (
    <>
      <h1>Home page</h1>
      {error && <p>{error}</p>}
      <Link to={'/Cart'}>
        <ShoppingCart /> [{countriesCart.length}]
      </Link>
      <Button onClick={toggleTheme}>
        Switch to{' '}
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />} mode
      </Button>
      {/*       <SearchBar /> */}
      {countriesExist && <CountryTable countries={countries} />}
    </>
  )
}
