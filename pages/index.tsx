import Box from '@material-ui/core/Box'
import Container from '@material-ui/core/Container'
import React from 'react'

import BanerSubfocus from '../src/components/BanerSubfocus'
import RowWithMenu from '../src/components/RowWithMenu'
import { AsideMenuProps } from '../src/types'

const firstRowMenu: AsideMenuProps = {
  title: 'Category menu',
  items: [
    {
      text: 'Bakery',
      link: '#'
    },
    {
      text: 'Fruit and vegetables',
      link: '#'
    },
    {
      text: 'Meat and fish',
      link: '#'
    },
    {
      text: 'Drinks',
      link: '#'
    },
    {
      text: 'Kitchen',
      link: '#'
    }
  ],
  buttonText: 'More categories'
}

const Home = () => {
  return (
    <Container>
      <RowWithMenu
        secondColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        thirdColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        menu={firstRowMenu}
      />
    </Container>
  )
}

export default Home
