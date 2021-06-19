import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown'
import React from 'react'

type Props = {
  mainCategory: string
  link: string
  subCategories: Array<{
    name: string
    link: string
  }>
  spanClassName?: string
}

const CategoryButton = ({ mainCategory, link, subCategories, spanClassName }: Props) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLButtonElement>(null)
  const open = Boolean(anchorEl)

  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    setAnchorEl(e.currentTarget)
  }

  const handleClose = () => {
    setAnchorEl(null)
  }

  return (
    <>
      <Button
        aria-haspopup={subCategories.length > 0}
        id={`${mainCategory}-button`}
        aria-controls="customizedButton"
        aria-expanded={open ? 'true' : undefined}
        variant="light"
        size="small"
        onClick={subCategories.length > 0 ? (e) => handleClick(e) : undefined}
        endIcon={subCategories.length > 0 && <KeyboardArrowDownIcon color="secondary" />}
      >
        <span className={spanClassName}>{mainCategory}</span>
      </Button>
      <Menu
        id={`${mainCategory}-submenu`}
        MenuListProps={{ 'aria-labelledby': `${mainCategory}-button` }}
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
        elevation={0}
        anchorOrigin={{ vertical: 'bottom', horizontal: 'right' }}
        transformOrigin={{
          vertical: 'top',
          horizontal: 'right'
        }}
      >
        {subCategories.map((subCategory) => (
          <MenuItem key={subCategory.name}>{subCategory.name}</MenuItem>
        ))}
      </Menu>
    </>
  )
}

export default CategoryButton
