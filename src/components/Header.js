import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()

    const handleHomeButton = () => {
        navigate('/home')
    }

    const handleOnContact = () => {
        navigate('/contact')
    }

    return (
      <>
        <Stack spacing={0} direction="row">
          <Button variant="text" onClick={handleHomeButton}>Home</Button>
          <Button variant="text" onClick={handleOnContact}>Contact</Button>
        </Stack>
      </>  
      )
}

export default Header
