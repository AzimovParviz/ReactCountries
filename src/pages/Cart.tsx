import React from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'


import { Country, AppState } from '../types'
import { addCountry, removeCountry } from '../redux/actions/country'
import { useCountry } from '../hooks/useCountry'

export default function Cart() {
    const countries = useSelector((state: AppState) => state.country.inCart)
    console.log('cart is', countries)
    return (
        <>
        {countries.length <= 0 && <p>cart is empty</p>}
        {countries.length > 0 && <p>Contents of the cart:</p>}
        <ul>
            {countries.map(c=><li>{c.name.common}</li>)}
        </ul>
        </>
    )
}