import React, { useState } from 'react'
import { Button, Menu, MenuItem } from '@mui/material'
import { useSelector, useDispatch } from 'react-redux'

import user from 'reducer/user'
import { HeaderContainer } from './Styles'

// import { API_DELETE } from 'utils/utils'

const PostMenu = () => {
    const [anchorEl, setAnchorEl] = useState(null);
    const openNav = Boolean(anchorEl);
    const currentUser = useSelector((store) => store.user.username);
    // const accessToken = useSelector((store) => store.user.accessToken)
    const dispatch = useDispatch();
  
    const openNavigation = (event) => {
      setAnchorEl(event.currentTarget);
    };
  
    const handleClose = () => {
      setAnchorEl(null);
    };
  //Hur kommer det sig att logout går vidare till login sidan utan navigate?
    const logout = () => {
      dispatch(user.actions.setAccessToken(null))
    };

    //  const onDelete = (id) => {
    //     // dispatch(user.actions.setAccessToken(null))
    //     // console.log(`${displayName} has been deleted`)

    //     if (createdBy === currentUser) {
          
    //       deleteUser({
    //         method: "DELETE",
    //       });
    //     } 
  
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
          {currentUser}
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
          <MenuItem>Delete</MenuItem>
        </Menu>
      </HeaderContainer>
    );
  };
  
  export default PostMenu;

