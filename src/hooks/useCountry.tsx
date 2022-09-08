import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchCountries } from '../redux/actions'
import { AppState } from '../types'

export const useCountry = () => {
  const countries = useSelector((state: AppState) => state.country.exists)
  const [error] = useState(false)
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchCountries())
  }, [dispatch])

  return {
    error,
    countries,
  }
}
