import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
  INIT_COUNTRIES,
  INIT_COUNTRIES_FAILED,
} from '../../types'

export default function country(
  state: CountryState = {
    inCart: [],
    exists: [],
  },
  action: CountryActions
): CountryState {
  switch (action.type) {
  case ADD_COUNTRY: {
    const { country } = action.payload
    if (state.inCart.find((p) => p.name === country.name)) {
      return state
    }
    console.log('added to cart', country.name)
    // Always return new state (e.g, new object) if changed
    return { ...state, inCart: [...state.inCart, country] }
  }

  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const index = state.inCart.findIndex((p) => p.name === country.name)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }

  case INIT_COUNTRIES: {
    const { countries } = action.payload
    return { ...state, exists: countries }
  }

  case INIT_COUNTRIES_FAILED: {
    return state
  }

  default:
    return state
  }
}
