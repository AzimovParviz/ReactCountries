import React from 'react'
import { SearchBarProps } from '../types'

export default function SearchBar(props: SearchBarProps) {
  return (
    <div className="searchBar">
      <input
        type="text"
        placeholder="Enter a country's name"
        onChange={props.handleNameChange}
      />
      <input
        type="text"
        placeholder="spoken language"
        onChange={props.handleLangChange}
      />
      <select onChange={props.handleRegChange}>
        <option hidden disabled selected>
          {' '}
          -- select an option --{' '}
        </option>
        <option value="Americas">Americas</option>
        <option value="Europe">Europe</option>
        <option value="Africa">Africa</option>
        <option value="Asia">Asia</option>
        <option value="Ocenia">Oceania</option>
      </select>
    </div>
  )
}
