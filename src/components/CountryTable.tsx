import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
/* import { Link } from 'react-router-dom' */
import {
  Button,
  TableContainer,
  TableCell,
  TableRow,
  Table,
} from '@mui/material/'

import CountryModal from './CountryModal'

import { Country } from '../types'
import { addCountry } from '../redux/actions/country'

type TableProps = {
  countries: Country[]
  /*     loading: boolean */
}

export default function CountryTable(props: TableProps) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [modaldata, setModaldata] = useState<Country | null>()
  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  return (
    <TableContainer>
      <Table>
        {modaldata && (
          <CountryModal
            country={modaldata}
            handleClose={handleClose}
            open={open}
          />
        )}
        {props.countries?.map((c: Country) => (
          <TableRow key={c.name.common}>
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
  )
}
