import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Button,
  TableContainer,
  TableCell,
  TableRow,
  Table,
} from '@mui/material/'

import CountryModal from '../components/CountryModal'

import { Country } from '../types'
import { addCountry } from '../redux/actions/country'
import { useCountry } from '../hooks/useCountry'

export default function Home() {
  const dispatch = useDispatch()
  const [modaldata, setModaldata] = useState<Country | null>()
  const { countries, error } = useCountry()

  const [open, setOpen] = useState(false)

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <>
      <h1>Home page</h1>
      {error && <p>{error}</p>}
      <Link to={'/Cart'}>Cart</Link>
      {modaldata && (
        <CountryModal
          country={modaldata}
          handleClose={handleClose}
          open={open}
        />
      )}
      <TableContainer>
        <Table>
          {countries?.map((c: Country) => (
            <TableRow key={c.name.common}>
              <TableCell></TableCell>
              {/* <TableCell><Link
                to={`/countries/${c.name.common}`}
              >{`${c.name.common}`}</Link></TableCell> */}
              <Button
                onClick={() => {
                  handleOpen()
                  setModaldata(c)
                }}
              >
                {c.name.common}
              </Button>
              <TableCell>{`Population: ${c.population} people`}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  color="error"
                  onClick={() => dispatch(addCountry(c))}
                >
                  Add to cart
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </Table>
      </TableContainer>
    </>
  )
}
