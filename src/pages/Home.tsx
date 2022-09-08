import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import { useCountry } from '../hooks/useCountry'
import CountryTable from '../components/CountryTable'
import SearchBar from '../components/SearchBar'
import { useSelector } from 'react-redux'
import { AppState, Region } from '../types'

import ShoppingCart from '@mui/icons-material/ShoppingCart'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import Brightness7Icon from '@mui/icons-material/Brightness7'
import { ThemeContextW } from '../context/ThemeProvider'
import Button from '@mui/material/Button'

/*
TODO:
infinite scrolling, cart badge with a number that live updates, live search without the need of a reset button
FOLLOW YAZAN'S SUGGESTIONS TO IMPROVE YOUR APP
 */

export default function Home() {
  const [langterm, setLangterm] = useState('')
  const [nameterm, setNameterm] = useState('')
  const [regterm, setRegterm] = useState<Region>(Region.empty)
  const { theme, toggleTheme } = useContext(ThemeContextW)
  const { countries, error } = useCountry()
  const countriesCart = useSelector((state: AppState) => state.country.inCart)

  let filtered = countries //for search filtering and/or infinite scrolling
  if (langterm) filtered = filtered.filter((c) => c) //for future implementation of filtering by language

  if (nameterm)
    filtered = filtered.filter((c) =>
      c.name.common.toLowerCase().includes(nameterm.toLowerCase())
    )
  if (regterm)
    filtered = filtered.filter((c) => c.region === regterm.toString())

  const handleChange = (e: any, term: string) => {
    switch (term) {
    case 'lang':
      setLangterm((e.target as HTMLInputElement).value)
      break
    case 'name':
      setNameterm((e.target as HTMLInputElement).value)
      break
    case 'region':
      setRegterm((e.target as HTMLSelectElement).value as Region)
      break
    default:
      break
    }
  }
  return (
    <>
      <h1>Home page</h1>
      {error && <p>{error}</p>}
      <Link to={'/Cart'}>
        <ShoppingCart /> [{countriesCart.length}]
      </Link>
      <Button variant="contained" onClick={toggleTheme}>
        Switch to{' '}
        {theme === 'light' ? <Brightness4Icon /> : <Brightness7Icon />} mode
      </Button>
      <form>
        <SearchBar
          nameInput={nameterm}
          regInput={regterm?.toString()}
          handleLangChange={(e) => handleChange(e, 'lang')}
          handleNameChange={(e) => handleChange(e, 'name')}
          handleRegChange={(e) => handleChange(e, 'region')}
        />
      </form>
      <Button
        className="button"
        variant="outlined"
        color="warning"
        onClick={() => {
          setLangterm('')
          setNameterm('')
          setRegterm(Region.empty)
        }}
      >
        RESET
      </Button>
      {filtered && <CountryTable countries={filtered} isCart={false} />}
    </>
  )
}
