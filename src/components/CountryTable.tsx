import React, { useEffect, useState } from 'react'
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
import { RemoveShoppingCart } from '@mui/icons-material'
/* TODO: loading icon and loading state passing as props */

export default function CountryTable(props: TableProps) {
  const dispatch = useDispatch()
  const [open, setOpen] = useState(false)
  const [modaldata, setModaldata] = useState<Country | null>(null)
  const [countries, setCountries] = useState<Country[] | null>(null)
  const [byName, setByName] = useState(props.countries)
  const [byPopulation, setByPopulation] = useState(props.countries)
  const [order, setOrder] = useState<'asc' | 'desc'>('asc')

  useEffect(() => {
    setCountries(props.countries)
  }, [props.countries])

  useEffect(() => {
    setCountries(byName)
  }, [byName])

  useEffect(() => {
    setCountries(byPopulation)
  }, [byPopulation])

  const handleOpen = () => setOpen(true)
  const handleClose = () => setOpen(false)

  console.log(order)

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
            <TableCell>
              Name{' '}
              <Button
                onClick={() => {
                  if (order === 'asc') setOrder('desc')
                  else setOrder('asc')
                  order === 'asc'
                    ? setByName(
                        countries!.sort((a, b) =>
                          a.name.common.localeCompare(b.name.common)
                        )
                    )
                    : setByName(
                        countries!.sort((a, b) =>
                          b.name.common.localeCompare(a.name.common)
                        )
                    )
                }}
              >
                {'>'}
              </Button>
            </TableCell>
            <TableCell align="left">Flag</TableCell>
            <TableCell align="left">Official name</TableCell>
            <TableCell align="left">
              Population{' '}
              <Button
                onClick={() => {
                  if (order === 'asc') setOrder('desc')
                  else setOrder('asc')
                  order === 'asc'
                    ? setByPopulation(countries!.sort(compareNumAsc))
                    : setByPopulation(countries!.sort(compareNumDesc))
                }}
              >
                {'>'}
              </Button>
            </TableCell>
            <TableCell align="left">Location</TableCell>
            <TableCell align="left">Actions</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {countries?.map((c: Country) => (
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
                {!props.isCart && (
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(addCountry(c))}
                  >
                    Add to Cart <AddShoppingCart />
                  </Button>
                )}
                {props.isCart && (
                  <Button
                    variant="outlined"
                    onClick={() => dispatch(addCountry(c))}
                  >
                    Remove from Cart <RemoveShoppingCart />
                  </Button>
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  )
}

function compareNumDesc(a: Country, b: Country) {
  console.log('descending order')
  if (a.population < b.population) return -1
  if (a.population > b.population) return 1
  return 0
}

function compareNumAsc(a: Country, b: Country) {
  console.log('ascending order')
  if (b.population < a.population) return -1
  if (b.population > a.population) return 1
  return 0
}
