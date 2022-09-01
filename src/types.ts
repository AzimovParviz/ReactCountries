import Country from './pages/Country'

// Action types
export const ADD_COUNTRY = 'ADD_COUNTRY'
export const REMOVE_COUNTRY = 'REMOVE_COUNTRY'
export const INIT_COUNTRY = 'INIT_COUNTRY'
export const TOGGLE_DIALOG = 'TOGGLE_DIALOG'

// Enum
export enum DialogType {
  SignIn = 'signIn',
  SignUp = 'signUp',
}

export enum Region {
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
  type: typeof INIT_COUNTRY
  payload: {
    country: Country
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

export type CountryState = {
  inCart: Country[]
  exists: Country[]
}

// Using dynamic keys from an enum
export type UiState = {
  dialogOpen: {
    [key in DialogType]?: boolean
  }
}

export type AppState = {
  country: CountryState
  ui: UiState
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
  //onChange events
  handleNameChange: React.ChangeEventHandler<HTMLInputElement>
  handleLangChange: React.ChangeEventHandler<HTMLInputElement>
  handleRegChange: React.ChangeEventHandler<HTMLSelectElement>
}

//Regions for region select filter
