import {
  CountryState,
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
} from '../../types'

export default function country(
  state: CountryState = {
    inCart: [],
  },
  action: CountryActions
): CountryState {
  switch (action.type) {
  case ADD_COUNTRY: {
    const { country } = action.payload
    if (state.inCart.find((p) => p.id === country.id)) {
      return state
    }
    // Always return new state (e.g, new object) if changed
    return { ...state, inCart: [...state.inCart, country] }
  }

  case REMOVE_COUNTRY: {
    const { country } = action.payload
    const index = state.inCart.findIndex((p) => p.id === country.id)
    if (index >= 0) {
      state.inCart.splice(index, 1)
      return { ...state, inCart: [...state.inCart] }
    }
    return state
  }

  default:
    return state
  }
}
