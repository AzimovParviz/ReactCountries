import React from 'react'
import { Link } from 'react-router-dom'

import { useCountry } from '../hooks/useCountry'
import CountryTable from '../components/CountryTable'

/*
TODO:
remove from cart button / theme switching / filtering
 */

export default function Home() {
  const { countries, error } = useCountry()

  return (
    <>
      <h1>Home page</h1>
      {error && <p>{error}</p>}
      <Link to={'/Cart'}>Cart</Link>
      {/*       <SearchBar /> */}
      {countries && <CountryTable countries={countries} />}
    </>
  )
}
