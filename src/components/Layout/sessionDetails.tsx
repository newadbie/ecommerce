import Badge from '@material-ui/core/Badge'
import IconButton from '@material-ui/core/IconButton'
import Stack from '@material-ui/core/Stack'
import Box from '@material-ui/system/Box'
import React from 'react'

import User from '../../../assets/ic-actions-user.svg'
import Basket from '../../../assets/ic-ecommerce-basket.svg'
import classes from './style.module.scss'

const SessionDetails = () => {
  return (
    <Box>
      <Stack direction="row">
        <IconButton>
          <User />
        </IconButton>
        <IconButton>
          <Badge
            anchorOrigin={{
              vertical: 'bottom',
              horizontal: 'left'
            }}
            badgeContent={4}
            color="primary"
            className={classes.badge}
          >
            <Basket />
          </Badge>
        </IconButton>
      </Stack>
    </Box>
  )
}

export default SessionDetails
