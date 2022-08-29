import { combineReducers } from 'redux'

import country from './country'
import ui from './ui'

const createRootReducer = () =>
  combineReducers({
    country,
    ui,
  })

export default createRootReducer
