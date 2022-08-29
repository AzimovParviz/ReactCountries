import React from 'react'
import { useParams } from 'react-router-dom'
import { useSelector } from 'react-redux'

import { AppState } from '../types'

export default function Country() {
  const { id } = useParams<{ id: string }>()

  const country = useSelector((state: AppState) =>
    state.country.inCart.find((c) => c.name.common === id)
  )

  if (!country) {
    return <div>country not found</div>
  }

  return (
    <>
      <h1>country page</h1>
      <h2>{`${country.name} - $${country.population}`}</h2>
    </>
  )
}
