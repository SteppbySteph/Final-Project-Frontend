import React from 'react'
import { Button, Stack } from '@mui/material'
import { useNavigate } from "react-router-dom";

import { LogoLanding } from 'components/Styles'


const Header = () => {
    const navigate = useNavigate()

    const handleHomeButton = () => {
        navigate('/home')
    }

    const handleOnContact = () => {
        navigate('/contact')
    }

    const handleOnLandingPage = () => {
      navigate('/')
  }

    return (
      <>
        <LogoLanding onClick={handleOnLandingPage}>JS-SUP</LogoLanding>
        <Stack spacing={0} direction="row">
          <Button 
            size='large' 
            variant='text' 
            onClick={handleHomeButton}
            sx={{color:'#fff'}}>
            Home
          </Button>
          <Button 
            size='large' 
            variant="text" 
            onClick={handleOnContact}
            sx={{color:'#fff'}}
          >
            Contact
          </Button>
        </Stack>
      </>  
      )
}

export default Header
