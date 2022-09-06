import React from 'react'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

import CountryTable from '../components/CountryTable'

export default function Cart() {
  const countries = useSelector((state: AppState) => state.country.inCart)
  return (
    <>
      <CountryTable countries={countries} isCart={true} />
    </>
  )
}
