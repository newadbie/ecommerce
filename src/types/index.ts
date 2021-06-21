const currencies = ['PLN', 'USD'] as const

export type AsideMenuProps = {
  title: string
  items: Array<{
    link: string
    text: string
  }>
  buttonText: string
}

export type ProductProps = {
  title: string
  rating: number
  border?: boolean
  image?: StaticImageData
  description: string
  price: number
  lastPrice?: number
  currency: typeof currencies[number]
}
