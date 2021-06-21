import { Chip, Typography } from '@material-ui/core'
import { Box } from '@material-ui/core'
import Image from 'next/image'
import React from 'react'

import placeholderImg from '../../../public/product.jpg'
import { ProductProps } from '../../types'
import classes from './style.module.scss'

const Product = ({ title, description, price, lastPrice, image }: ProductProps) => {
  const discountPercentage = lastPrice ? 100 - (price * 100) / lastPrice : undefined

  return (
    <Box className={classes.product}>
      <header className={classes.header}>
        {discountPercentage && (
          <Chip
            className={classes.discount}
            color="secondary"
            style={{ fontWeight: 'bold' }}
            label={`- ${discountPercentage.toFixed(2)}%`}
          />
        )}
        <Image alt="Alt" objectPosition="center" src={placeholderImg} layout="intrinsic" />
      </header>
      <main>
        <Typography variant="h6">{title}</Typography>
        <span className={classes.muted}>{description}</span>
      </main>
    </Box>
  )
}

export default Product
