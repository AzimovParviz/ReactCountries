import { useEffect, useState } from 'react'
import { Country } from '../types'

export const useCountry = () => {
  const [countries, setCountry] = useState<Country[] | null>()
  const [error, setError] = useState(false)
  //https://restcountries.com/v3.1/name/
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response: any = await fetch(
          `https://restcountries.com/v3.1/all?fields=name,population,flags`
        )
        const jsonResponse: any = await response.json()
        setCountry(jsonResponse)
        setError(false)
      } catch (_) {
        setError(true)
      }
    }
    fetchCountry()
  }, [])

  return {
    error,
    countries,
  }
}
