import Stack from "@material-ui/core/Stack";
import Box from "@material-ui/system/Box";
import React from "react";

import SearchBox from "../SearchBox";
import Brand from "../../../assets/Brand.svg";
import classes from "./style.module.scss";
import { IconButton } from "@material-ui/core";
import Badge from "@material-ui/core/Badge";
import User from "../../../assets/ic-actions-user.svg";
import Basket from "../../../assets/ic-ecommerce-basket.svg";

const Header = () => {
  return (
    <header className={classes.header}>
      <Box className={classes.top__navigation} component="nav">
        <Box>
          <Stack direction="row" component="ul">
            <li className={classes.item}>
              <a href="#">Chat with us</a>
            </li>
            <li className={classes.item}>
              <a href="tel:+420 336 775 664">+420 336 775 664</a>
            </li>
            <li className={classes.item}>
              <a href="mailto: info@freshnesecom.com">info@freshnesecom.com</a>
            </li>
          </Stack>
        </Box>
        <Box>
          <Stack direction="row" component="ul">
            <li className={classes.item}>
              <a href="#">Blog</a>
            </li>
            <li className={classes.item}>
              <a href="#">About Us</a>
            </li>
            <li className={classes.item}>
              <a>Careers</a>
            </li>
          </Stack>
        </Box>
      </Box>
      <Box className={classes.main}>
        <Box className={classes.brand}>
          <Brand />
        </Box>
        <SearchBox />
        <Box>
          <Stack direction="row">
            <IconButton>
              <User />
            </IconButton>
            <IconButton>
              <Badge
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "left",
                }}
                badgeContent={4}
                color="primary"
                className={classes.badge}
              >
                <Basket />
              </Badge>
            </IconButton>
          </Stack>
        </Box>
      </Box>
    </header>
  );
};

export default Header;
