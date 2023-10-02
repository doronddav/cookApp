import React, { useState } from 'react';
// import logo from '../../../public/tdn-logo.png';
import logo from '../../assets/tdn-logo.png';
import classes from './header.module.scss';
import OpenMenuBtn from '../menu/OpenMenuBtn';
import Menu from '../menu/Menu';

const Header = () => {
  const [openMenu,setOpenMenu ]= useState(false)
  return (
    <>
    <div className={classes.header}>
        <div className={classes.logo}>
          <img src={logo} alt="Logo" /> 
        </div>
        {/* <OpenMenuBtn setOpenMenu={setOpenMenu} openMenu={openMenu}/> */}
    </div>
      {/* <Menu  setOpenMenu={setOpenMenu} openMenu={openMenu}/> */}
    </>
  );
};

export default Header;
