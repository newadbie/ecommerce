import Stack from '@material-ui/core/Stack'
import Box from '@material-ui/system/Box'
import React from 'react'

import SearchBox from '../SearchBox'
import BrandComponent from './brand'
import SessionDetails from './sessionDetails'
import classes from './style.module.scss'

const Header = () => {
  return (
    <header className={classes.header}>
      <Box className={classes.top__navigation} component="nav">
        <Box>
          <Stack direction="row" component="ul">
            <li className={classes.item}>
              <a href="#">Chat with us</a>
            </li>
            <li className={classes.item}>
              <a href="tel:+420 336 775 664">+420 336 775 664</a>
            </li>
            <li className={classes.item}>
              <a href="mailto: info@freshnesecom.com">info@freshnesecom.com</a>
            </li>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" component="ul">
            <li className={classes.item}>
              <a href="#">Blog</a>
            </li>
            <li className={classes.item}>
              <a href="#">About Us</a>
            </li>
            <li className={classes.item}>
              <a>Careers</a>
            </li>
          </Stack>
        </Box>
      </Box>
      <Box className={classes.main}>
        <BrandComponent />
        <SearchBox />
        <SessionDetails />
      </Box>
    </header>
  )
}

export default Header
