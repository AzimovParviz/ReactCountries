import { Dispatch } from 'redux'
import {
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  INIT_COUNTRIES,
  INIT_COUNTRIES_FAILED,
  Country,
} from '../../types'

export function addCountry(country: Country): CountryActions {
  return {
    type: ADD_COUNTRY,
    payload: {
      country,
    },
  }
}

export function removeCountry(country: Country): CountryActions {
  return {
    type: REMOVE_COUNTRY,
    payload: {
      country,
    },
  }
}

export function initCountries(countries: Country[]): CountryActions {
  return {
    type: INIT_COUNTRIES,
    payload: {
      countries,
    },
  }
}

export function initCountriesFailed(countries: Country[]): CountryActions {
  return {
    type: INIT_COUNTRIES_FAILED,
    payload: {
      countries,
    },
  }
}

export function fetchCountries() {
  return async (dispatch: Dispatch) => {
    try {
      const response: any = await fetch(
        `https://restcountries.com/v3.1/all?fields=name,population,flags,region`
      )
      const countries: Country[] = await response.json()

      dispatch(initCountries(countries))
    } catch (_) {
      //dispatch(initCountriesFailed())
    }
  }
}
