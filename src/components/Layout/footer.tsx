import Chip from '@material-ui/core/Chip'
import Container from '@material-ui/core/Container'
import Grid from '@material-ui/core/Grid'
import Stack from '@material-ui/core/Stack'
import Typography from '@material-ui/core/Typography'
import Box from '@material-ui/system/Box'
import React from 'react'

import classes from './style.module.scss'

const columns = [
  {
    title: 'Get in touch',
    items: [
      {
        link: '#',
        text: 'About Us'
      },
      {
        link: '#',
        text: 'Careers'
      },
      {
        link: '#',
        text: 'Press Releases'
      },
      {
        link: '#',
        text: 'Blog'
      }
    ]
  },
  {
    title: 'Connections',
    items: [
      {
        link: '#',
        text: 'Facebook'
      },
      {
        link: '#',
        text: 'Twitter'
      },
      {
        link: '#',
        text: 'Instagram'
      },
      {
        link: '#',
        text: 'Youtube'
      },
      {
        link: '#',
        text: 'Linkedin'
      }
    ]
  },
  {
    title: 'Earnings',
    items: [
      {
        link: '#',
        text: 'Become an Affiliate'
      },
      {
        link: '#',
        text: 'Advertise your product'
      },
      {
        link: '#',
        text: 'Sell on Market'
      }
    ]
  },
  {
    title: 'Account',
    items: [
      {
        link: '#',
        text: 'Your account'
      },
      {
        link: '#',
        text: 'Returns Centre'
      },
      {
        link: '#',
        text: '100 % purchase protection'
      },
      {
        link: '#',
        text: 'Chat with us'
      },
      {
        link: '#',
        text: 'Help'
      }
    ]
  }
]

const tags = [
  'beans',
  'Carrots',
  'Apples',
  'Garlic',
  'Mushrooms',
  'Tomatoes',
  'Chilli peppers',
  'Broccoli',
  'Watermelons',
  'Oranges',
  'Bananas',
  'Grapes',
  'Cherries',
  'Meat',
  'Seo tag',
  'Fish',
  'Seo tag',
  'Fresh food',
  'Lemons'
]

const Footer = () => {
  return (
    <footer className={classes.footer}>
      <Container>
        <Grid container>
          {columns.map((column) => (
            <Grid key={column.title} item xs={3} className={classes.column}>
              <header>
                <Typography variant="h6" className={classes.title}>
                  {column.title}
                </Typography>
              </header>
              <nav>
                <Stack direction="column" component="ul">
                  {column.items.map((item) => (
                    <li key={item.text} className={classes.item}>
                      <a href={item.link}>{item.text}</a>
                    </li>
                  ))}
                </Stack>
              </nav>
            </Grid>
          ))}
        </Grid>
        <Box width="100%">
          <header>
            <Typography variant="h6" style={{ marginBottom: '16px', marginTop: '48px' }}>
              Product tags
            </Typography>
          </header>
          <Stack flexWrap="wrap" justifyContent="flex-start" direction="row" spacing={2}>
            {tags.map((tag, i) => (
              <Chip style={{ marginTop: '20px' }} key={`${tag}${i}`} label={tag}  />
            ))}
          </Stack>
        </Box>
      </Container>
    </footer>
  )
}

export default Footer
