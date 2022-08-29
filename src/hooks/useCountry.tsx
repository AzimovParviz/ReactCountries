import { useEffect, useState } from 'react'

export const useCountry = () => {
  const [country, setCountry] = useState({})
  const [error, setError] = useState(false)
  //https://restcountries.com/v3.1/name/
  useEffect(() => {
    const fetchCountry = async () => {
      try {
        const response = await fetch(`https://restcountries.com/v3.1/all`)
        setCountry(response)
        setError(false)
      } catch (_) {
        setError(true)
      }
    }
    fetchCountry()
  }, [country])

  return {
    error,
    country,
  }
}
