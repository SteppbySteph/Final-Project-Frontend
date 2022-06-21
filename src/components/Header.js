import React from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@mui/material'

import { 
  ButtonWrapper,
  LogoLanding 
} from 'components/Styles'

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
        <ButtonWrapper>
          <Button 
            size='large' 
            variant='text' 
            onClick={handleHomeButton}
            sx={{color:'#fff'}}
          >
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
        </ButtonWrapper>
      </>  
      )
}

export default Header
