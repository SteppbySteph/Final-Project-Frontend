import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const onBackButtonClick = () => {
      navigate(-1)
    }

  return (
    <Stack direction='row' spacing={1}>
      <Button 
        sx={{
          color: 'white',
          minWidth: 100,
        }}
        onClick={onBackButtonClick}>&#10094; Back</Button>
    </Stack>
  );
}

export default BackButton
