import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from "react-router-dom";


const Header = () => {
    const navigate = useNavigate()

    const handleOnHome = () => {
        navigate('/home')
    }

    const handleOnContact = () => {
        navigate('/contact')
    }

    return (
        <Stack spacing={2} direction="row">
          <Button variant="text" onClick={handleOnHome}>Home</Button>
          <Button variant="text" onClick={handleOnContact}>Contact</Button>
        </Stack>
      )
}

export default Header
