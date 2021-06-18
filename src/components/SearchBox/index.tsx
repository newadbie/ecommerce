import { Input, InputAdornment } from "@material-ui/core";
import FormControl from "@material-ui/core/FormControl";
import React from "react";
import Select, { StylesConfig } from "react-select";
import SearchIcon from "@material-ui/icons/Search";
import classes from "./style.module.scss";
import KeyboardArrowDownIcon from "@material-ui/icons/KeyboardArrowDown";

type MyOptionType = {
  label: string;
  value: string;
};

type IsMulti = false;

const customStyles: StylesConfig<MyOptionType, IsMulti> = {
  control: (provided) => ({
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
      ? "rgba(106, 152, 60, .5)"
      : "transparent",
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
            aria-invalid="true"
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
