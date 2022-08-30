import * as React from 'react'
import { Box, Typography, Modal } from '@mui/material/'
import { Country } from '../types'

const style = {
  position: 'absolute' as 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
}

type ModalData = {
  country: Country
  open: boolean
  handleClose: () => void
}

export default function CountryModal(data: ModalData) {
  return (
    <div>
      <Modal
        open={data.open}
        onClose={data.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            {data.country.name.common}
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            {data.country.name.official}
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}
