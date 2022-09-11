import React from 'react'
import { TextField, MenuItem, Select } from '@mui/material'
import { Region, SearchBarProps } from '../types'

export default function SearchBar(props: SearchBarProps) {
  const MenuItemValues = Region
  return (
    <div className="searchBar">
      <TextField
        type="text"
        label="Country's name"
        value={props.nameInput}
        variant="filled"
        onChange={props.handleNameChange}
      />
      <Select
        onChange={props.handleRegChange}
        value={props.regInput}
        label="Region"
      >
        <MenuItem selected value={MenuItemValues.empty}>
          {' '}
          -- select the region --{' '}
        </MenuItem>
        <MenuItem value={MenuItemValues.Americas}>Americas</MenuItem>
        <MenuItem value={MenuItemValues.Europe}>Europe</MenuItem>
        <MenuItem value={MenuItemValues.Africa}>Africa</MenuItem>
        <MenuItem value={MenuItemValues.Asia}>Asia</MenuItem>
        <MenuItem value={MenuItemValues.Oceania}>Oceania</MenuItem>
      </Select>
    </div>
  )
}
