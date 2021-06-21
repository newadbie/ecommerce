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

const secondRowMenu: AsideMenuProps = {
  title: 'Best selling products',
  items: [
    {
      text: 'Kitchen',
      link: '#'
    },
    {
      text: 'Meat and fish',
      link: '#'
    },
    {
      text: 'Special nutrition',
      link: '#'
    },
    {
      text: 'Pharmacy',
      link: '#'
    },
    {
      text: 'Baby',
      link: '#'
    }
  ],
  buttonText: 'More products'
}

const thirdRowMenu: AsideMenuProps = {
  title: 'Best from Farmers',
  items: [
    {
      text: 'Carrots',
      link: '#'
    },
    {
      text: 'Tomatoes',
      link: '#'
    },
    {
      text: 'Potatoes',
      link: '#'
    },
    {
      text: 'Chicken',
      link: '#'
    },
    {
      text: 'Pork',
      link: '#'
    }
  ],
  buttonText: 'More products'
}


const Home = () => {
  return (
    <Container>
      <RowWithMenu
        secondColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        thirdColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        menu={firstRowMenu}
      />
      <RowWithMenu
        secondColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        thirdColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        menu={secondRowMenu}
      />
      <RowWithMenu
        secondColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        thirdColumn={<BanerSubfocus caption="Banner subfocus" title="Space for heading" buttonText="Read recepies" />}
        menu={thirdRowMenu}
      />
    </Container>
  )
}

export default Home
