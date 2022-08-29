import {
  CountryActions,
  ADD_COUNTRY,
  REMOVE_COUNTRY,
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
/* 
// An Example of Async action processed by redux-thunk middleware
export function fetchProduct(productId: string) {
    return (dispatch: Dispatch) => {
      return fetch(`products/${productId}`)
        .then(resp => resp.json())
        .then(product => {
          dispatch(addProduct(product))
        })
    }
  } */
