import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Stack } from "@mui/material";
import { Link } from "react-router-dom";

import { logo } from "../utils/constants";

import  SearchBar  from "./SeacrchBar";

const Navbar = () => {
  return (
    <Stack
      direction={"row"}
      alignItems="center"
      sx={{
        padding:'15px 20px',
        background: "#00",
        position: "sticky",
        top: 0,
        justifyContent: "space-between",
      }}
    >
      <Link to="/" style={{display:'flex',alignItems:'center' }} >
        <img src={logo} alt="logo" height={45} />
      </Link>
      <SearchBar/>
    </Stack>
  );
};

export default Navbar;
