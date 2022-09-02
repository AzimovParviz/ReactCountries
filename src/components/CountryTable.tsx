import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { Link } from 'react-router-dom'
import {
  Button,
  TableContainer,
  TableCell,
  TableRow,
  Table,
  TableHead,
  TableBody,
} from '@mui/material/'
import AddShoppingCart from '@mui/icons-material/AddShoppingCart'

import CountryModal from './CountryModal'

import { Country, TableProps } from '../types'
import { addCountry } from '../redux/actions/country'
/* TODO: loading icon and loading state passing as props */

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
        <TableHead>
          <TableRow>
            <TableCell>Name</TableCell>
            <TableCell align="left">Flag</TableCell>
            <TableCell align="left">Official name</TableCell>
            <TableCell align="left">Population</TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {props.countries?.map((c: Country) => (
            <TableRow key={c.name.common}>
              <TableCell>
                <Link
                  to={`/countries/${c.name.common}`}
                >{`${c.name.common}`}</Link>
              </TableCell>
              <TableCell>
                <img
                  src={c.flags.png}
                  alt={`flag of ${c.name.common}`}
                  width={'30%'}
                  height={'30%'}
                />
              </TableCell>
              <TableCell>
                <Button
                  onClick={() => {
                    handleOpen()
                    setModaldata(c)
                  }}
                >
                  {c.name.official}
                </Button>
              </TableCell>
              <TableCell>{`Population: ${c.population} people`}</TableCell>
              {/*             <TableCell>Spoken languages: {c.languages}</TableCell> */}
              <TableCell>Located in: {c.region}</TableCell>
              <TableCell>
                <Button
                  variant="outlined"
                  onClick={() => dispatch(addCountry(c))}
                >
                  Add to Cart <AddShoppingCart />
                </Button>
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}
