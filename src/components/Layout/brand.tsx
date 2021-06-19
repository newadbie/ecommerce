import Box from '@material-ui/system/Box'
import React from 'react'

import Brand from '../../../assets/Brand.svg'
import classes from './style.module.scss'

const BrandComponent = () => {
  return (
    <Box className={classes.brand}>
      <Brand />
    </Box>
  )
}

export default BrandComponent
