import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from 'react-router-dom'

const BackButton = () => {
    const navigate = useNavigate()

    const onBackButtonClick = () => {
      navigate('/home')
    }

  return (
    <Stack direction="row" spacing={2}>
        <Button onClick={onBackButtonClick}>Back</Button>
    </Stack>
  );
}

export default BackButton
