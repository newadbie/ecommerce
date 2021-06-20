import Box from '@material-ui/core/Box'
import Button from '@material-ui/core/Button'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React from 'react'

import Background from '../../../assets/group.svg'
import classes from './style.module.scss'

type Props = {
  caption: string
  title: string
  buttonText: string
}

const BanerSubfocus = ({ caption, title, buttonText }: Props) => {
  return (
    <Paper className={classes.paper} elevation={0}>
      <Background className={classes.svg__background} />
      <Box>
        <Typography variant="subtitle2" color="secondary" style={{fontWeight: 'bold'}}>
          {caption}
        </Typography>
        <Typography variant="h5">{title}</Typography>
      </Box>
      <Box>
        <Button variant="outlined" endIcon={<ChevronRightIcon color="secondary" />}>
          {buttonText}
        </Button>
      </Box>
    </Paper>
  )
}

export default BanerSubfocus
