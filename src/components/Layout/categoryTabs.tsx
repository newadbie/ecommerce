import Container from '@material-ui/core/Container'
import ChevronLeftIcon from '@material-ui/icons/ChevronLeft'
import ChevronRightIcon from '@material-ui/icons/ChevronRight'
import Box from '@material-ui/system/Box'
import React from 'react'
import ScrollMenu from 'react-horizontal-scrolling-menu'

import CategoryButton from './categoryButton'
import classes from './style.module.scss'

const categories = [
  {
    mainCategory: 'Bakery',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  },
  {
    mainCategory: 'Fruit and vegetables',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  },
  {
    mainCategory: 'Meat and fish',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  },
  {
    mainCategory: 'Drinks',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  },
  {
    mainCategory: 'Kitchen',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  },
  {
    mainCategory: 'Special nutrition',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  },
  {
    mainCategory: 'Baby',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  },
  {
    mainCategory: 'Pharmacy',
    link: '#',
    subCategories: [
      {
        name: 'Subcategory 1',
        link: '#'
      },
      {
        name: 'Subcategory 2',
        link: '#'
      },
      {
        name: 'Subcategory 3',
        link: '#'
      }
    ]
  }
]

const Tabs = () => {
  return categories.map((category) => <CategoryButton spanClassName={classes.span} key={category.mainCategory} {...category} />)
}

const ArrowLeft = () => (
  <div className="arrow-prev">
    <ChevronLeftIcon />
  </div>
)
const ArrowRight = () => (
  <div className="arrow-next">
    <ChevronRightIcon />
  </div>
)

const CategoryTabs = () => {
  const arrowLeft = ArrowLeft()
  const rightArrow = ArrowRight()
  let tabs = Tabs()

  return (
    <>
      <Box className={classes.categories__container}>
        <Container>
          <Box className={classes.categories}>
            <ScrollMenu
              hideArrows
              clickWhenDrag
              hideSingleArrow
              alignCenter={false}
              ref={el => (tabs = el as any)}
              translate={0}
              wheel={false}
              arrowLeft={arrowLeft}
              arrowRight={rightArrow}
              itemClass={classes.button}
              data={tabs}
            />
          </Box>
        </Container>
      </Box>
    </>
  )
}

export default CategoryTabs
