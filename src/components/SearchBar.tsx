import React from 'react'

type SearchBarProps = {
  nameTerm: string
  langTerm: string
  handleNameChange: () => void
  handleLangChange: () => void
}

export default function SearchBar(props: SearchBarProps) {
  return (
    <form>
      <input
        type="text"
        placeholder="country common name"
        onChange={props.handleLangChange}
      />
      <input
        type="text"
        placeholder="spoken language"
        onChange={props.handleLangChange}
      />
      {/* Europe Asia American Oceania Africa */}
      {
        {
          /* independent: true false */
        }
      }
    </form>
  )
}
