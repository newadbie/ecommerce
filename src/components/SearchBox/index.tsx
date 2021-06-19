import { FormControl, Input, InputAdornment } from "@material-ui/core";
import React from "react";
import Select, { StylesConfig } from "react-select";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./style.module.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";
import Button from "@material-ui/core/Button";

type MyOptionType = {
  label: string;
  value: string;
};

type IsMulti = false;

const customStyles: StylesConfig<MyOptionType, IsMulti> = {
  control: (provided, state) => ({
    ...provided,
    backgroundColor: "transparent",
    border: "none",
    boxShadow: "none",
  }),
  option: (provided, state) => ({
    ...provided,
    backgroundColor: state.isSelected
      ? "rgba(106, 152, 60, 1)"
      : state.isFocused
      ? "rgba(106, 152, 60, .2)"
      : "transparent",
    ":active": {
      backgroundColor: "rgba(106, 152, 60, .5)",
    },
  }),
};

const IndicatorSeparator = ({ innerProps }: any) => {
  return null;
};

const DropdownIndicator = () => <KeyboardArrowDownIcon color="secondary" />;

const SearchInput = () => {
  const options: MyOptionType[] = [
    {
      value: "cookies",
      label: "Cookies",
    },
    {
      value: "breakfast",
      label: "Breakfast",
    },
    {
      value: "coffe",
      label: "Coffe",
    },
  ];
  return (
    <form className={classes.form}>
      <div className={classes.select__wrapper}>
        <Select
          aria-labelledby="select"
          instanceId="select"
          aria-label="Select category"
          aria
          styles={customStyles}
          options={options}
          components={{ DropdownIndicator, IndicatorSeparator }}
        />
      </div>
      <div className={classes.search}>
        <FormControl fullWidth>
          <Input
            id="search"
            disableUnderline
            placeholder="Search Products, categories ..."
            inputProps={{
              "aria-invalid": "false",
            }}
            endAdornment={
              <InputAdornment position="end">
                <SearchIcon />
              </InputAdornment>
            }
          />
        </FormControl>
      </div>
    </form>
  );
};

export default React.memo(SearchInput);
