import Button from '@material-ui/core/Button'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import React from 'react'

import { AsideMenuProps } from '../../types'
import classes from './style.module.scss'

const CategoryMenu = ({ title, items, buttonText }: AsideMenuProps) => {
  return (
    <aside>
      <header>
        <Typography variant="h6" className={classes.title}>
          {title}
        </Typography>
      </header>
      <main>
        <Stack direction="column" component="ul">
          {items.map((item, i) => (
            <li key={`${item}${i}`} className={classes.item}>
              <a href={item.link}>{item.text}</a>
            </li>
          ))}
        </Stack>
        <Button endIcon={<ChevronRightIcon />} color="primary" className={classes.button} size="medium" variant="bright">
          {buttonText}
        </Button>
      </main>
    </aside>
  )
}

export default CategoryMenu
