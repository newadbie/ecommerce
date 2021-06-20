import Grid from '@material-ui/core/Grid'
import React from 'react'

import { AsideMenuProps } from '../../types'
import AsideMenu from '../AsideMenu'
import BanerSubfocus from '../BanerSubfocus'

type Props = {
  menu: AsideMenuProps
  className?: string
  secondColumn: React.ReactNode
  thirdColumn: React.ReactNode
}

const RowWithMenu = ({ menu, className, secondColumn, thirdColumn }: Props) => {
  return (
    <Grid spacing={3} style={{ padding: '64px 0' }} container className={className}>
      <Grid item xs={2}>
        <AsideMenu {...menu} />
      </Grid>
      <Grid item xs={5}>
        {secondColumn}
      </Grid>
      <Grid item xs={5}>
        {thirdColumn}
      </Grid>
    </Grid>
  )
}

export default RowWithMenu
