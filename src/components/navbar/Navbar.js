/** @format */

import React from "react";
import { NavbarWrapper } from "./NavbarStyles";
import SearchForm from "../searchForm/SearchForm";

const Navbar = () => {
  return (
    <NavbarWrapper>
      <SearchForm />
    </NavbarWrapper>
  );
};

export default Navbar;
