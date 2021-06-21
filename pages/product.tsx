import Container from '@material-ui/core/Container'
import React from 'react'

import Product from '../src/components/Product'

const ProductPage = () => {
  return (
    <Container>
      <Product
        currency="USD"
        // image={placeholderImg}
        title="Product title"
        description="Space for a small product description"
        rating={4}
        price={36.99}
        lastPrice={48.56}
      />
    </Container>
  )
}

export default ProductPage
