import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'
import  user from 'reducer/user'

import { HeaderContainer } from './Styles'

const PostMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openNav = Boolean(anchorEl);
    const displayName = useSelector((store) => store.user.username);
    const dispatch = useDispatch();
  
    const openNavigation = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  
    const logout = () => {
        dispatch(user.actions.setAccessToken(null))
            // localStorage.removeItem('token')
      //localStorage.removeItem(accessToken)
    };
  
    return (
      <HeaderContainer>
        {/* <LogoImage src={Logo} alt="logo navigation." /> */}
        <Button
          id="nav-button"
          aria-controls={openNav ? "nav-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={openNav ? "true" : undefined}
          onClick={openNavigation}
          color="secondary"
        >
          {displayName}
        </Button>
        <Menu
          id="nav-menu"
          anchorEl={anchorEl}
          open={openNav}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "nav-button",
          }}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "right",
          }}
        >
          <MenuItem onClick={logout}>Logout</MenuItem>
          <MenuItem>Delete account</MenuItem>
        </Menu>
      </HeaderContainer>
    );
  };
  
  export default PostMenu;

