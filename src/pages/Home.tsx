import React, { MutableRefObject, useContext, useRef, useState } from 'react'
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
filtering by language, page for each country that a user can link to, infinite scrolling, table sorting
 */

export default function Home() {
  const [langterm, setLangterm] = useState<string>('')
  const [nameterm, setNameterm] = useState<string>('')
  const [regterm, setRegterm] = useState<Region | null>()
  const { theme, toggleTheme } = useContext(ThemeContextW)
  const { countries, error } = useCountry()
  const countriesCart = useSelector((state: AppState) => state.country.inCart)
  const formRef = useRef() as MutableRefObject<HTMLFormElement> //for resetting the form fields

  let filtered = countries //for search filtering and/or infinite scrolling
  if (langterm) filtered = filtered.filter((c) => c) //for future implementation of filtering by language

  const handleReset = () => {
    formRef.current?.reset()
  }

  if (nameterm) filtered = filtered.filter((c) => c.name.common === nameterm)
  if (regterm)
    filtered = filtered.filter((c) => c.region === regterm.toString())
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
      <form>
        <SearchBar
          handleLangChange={(e) =>
            setLangterm((e.target as HTMLInputElement).value)
          }
          handleNameChange={(e) =>
            setNameterm((e.target as HTMLInputElement).value)
          }
          handleRegChange={(e) =>
            setRegterm((e.target as HTMLSelectElement).value as Region)
          }
        />
      </form>
      <Button
        className="button"
        variant="outlined"
        color="warning"
        onClick={() => {
          setLangterm('')
          setNameterm('')
          setRegterm(null)
          handleReset()
        }}
      >
        RESET
      </Button>
      {filtered && <CountryTable countries={filtered} />}
    </>
  )
}
