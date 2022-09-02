import React from 'react'
import { Region, SearchBarProps } from '../types'

export default function SearchBar(props: SearchBarProps) {
  const optionValues = Region
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Enter a country's name"
        value={props.nameInput}
        onChange={props.handleNameChange}
      />
      <input
        type="text"
        placeholder="spoken language"
        onChange={props.handleLangChange}
      />
      <select onChange={props.handleRegChange} value={props.regInput}>
        <option disabled hidden value={optionValues.empty}>
          {' '}
          -- select an option --{' '}
        </option>
        <option value={optionValues.Americas}>Americas</option>
        <option value={optionValues.Europe}>Europe</option>
        <option value={optionValues.Africa}>Africa</option>
        <option value={optionValues.Asia}>Asia</option>
        <option value={optionValues.Oceania}>Oceania</option>
      </select>
    </div>
  )
}
