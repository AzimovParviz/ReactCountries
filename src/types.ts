import { SelectChangeEvent } from '@mui/material'
import Country from './pages/Country'

// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const INIT_COUNTRIES = 'INIT_COUNTRIES'
export const INIT_COUNTRIES_FAILED = 'INIT_COUNTRIES_FAILED'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export enum Region {
  empty = '',
  Americas = 'Americas',
  Europe = 'Europe',
  Africa = 'Africa',
  Asia = 'Asia',
  Oceania = 'Oceania',
}

export type CountryName = {
  common: string
  official: string
}

export type Country = {
  name: {
    common: string
    official: string
    nativeName: CountryName[]
  }
  population: number
  flags: {
    png: string
    svg: string
  }
  /*   languages: { [key: string]: string }, */
  region: string
}

export type AddCountryAction = {
  type: typeof ADD_COUNTRY
  payload: {
    country: Country
  }
}

export type RemoveCountryAction = {
  type: typeof REMOVE_COUNTRY
  payload: {
    country: Country
  }
}

export type InitCountryAction = {
  type: typeof INIT_COUNTRIES
  payload: {
    countries: Country[]
  }
}

export type initCountriesFailed = {
  type: typeof INIT_COUNTRIES_FAILED
  payload: {
    countries: Country[]
  }
}

export type ToggleDialogAction = {
  type: typeof TOGGLE_DIALOG
  payload: {
    dialog: DialogType
  }
}

export type UiActions = ToggleDialogAction

// Use this union in reducer
export type CountryActions =
  | AddCountryAction
  | RemoveCountryAction
  | InitCountryAction
  | initCountriesFailed

export type CountryState = {
  inCart: Country[]
  exists: Country[]
}

export type AppState = {
  country: CountryState
}

//Theme types
export type Theme = 'light' | 'dark'
export type ThemeContext = {
  theme: Theme
  toggleTheme: () => void
}

//Component props types

export type ModalData = {
  country: Country
  open: boolean
  handleClose: () => void
}

export type SearchBarProps = {
  //input values
  nameInput: string
  regInput?: string
  //onChange events
  handleNameChange: React.ChangeEventHandler<HTMLInputElement>
  handleLangChange: React.ChangeEventHandler<HTMLInputElement>
  handleRegChange: (event: SelectChangeEvent<string>) => void
}

export type TableProps = {
  countries: Country[]
  isCart: boolean
  /*     loading: boolean */
}
//Regions for region select filter
