import React, { useState } from 'react';
import { IconButton, Menu, MenuItem } from '@mui/material';
import MenuIcon from '@mui/icons-material/Menu';
import { Link } from 'react-router-dom';
import iconHome from '/icons/home.svg';
import iconAbout from '/icons/about.svg';
import iconClock from '/icons/clock.svg';

const styleLink = {display: 'flex', alignItems: 'center', gap: '10px', color: 'inherit', fontWeight: '700', textDecoration: 'inherit'}

const Header = () => {
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);
  const [open, setOpen] = useState(false);

  const handleMenuClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
    setOpen(true);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
    setOpen(false);
  };

  return (
    <>
      <IconButton
        edge="start"
        color="inherit"
        aria-label="menu"
        onClick={handleMenuClick}
        sx={{
          position: 'absolute',
          right: '10px',
        }}
      >
        <MenuIcon />
      </IconButton>
      
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleMenuClose}
        sx={{
          borderRadius: '5px',
        }}
      >
        <MenuItem onClick={handleMenuClose} sx={{width: '160px'}}>
          <Link to='/home' style={styleLink}><img src={iconHome} alt='*' width='30px'/>Home</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to='/history' style={styleLink}><img src={iconClock} alt='*' width='30px'/>History</Link>
        </MenuItem>
        <MenuItem onClick={handleMenuClose}>
          <Link to='/about' style={styleLink}><img src={iconAbout} alt='*' width='30px'/>About</Link>
        </MenuItem>
      </Menu>
    </>
  );
};

export default Header;
