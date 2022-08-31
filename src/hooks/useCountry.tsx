import { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { initCountry } from '../redux/actions'
import { Country } from '../types'

export const useCountry = () => {
  const [countries, setCountry] = useState<Country[]>([])
  const [error, setError] = useState(false)
  const dispatch = useDispatch()
  //https://restcountries.com/v3.1/name/
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response: any = await fetch(
          `https://restcountries.com/v3.1/all?fields=name,population,flags`
        )
        const jsonResponse: any = await response.json()
        dispatch(initCountry(jsonResponse))
        setCountry(jsonResponse)
        setError(false)
      } catch (_) {
        setError(true)
      }
    }
    fetchCountry()
  }, [dispatch])

  return {
    error,
    countries,
  }
}
