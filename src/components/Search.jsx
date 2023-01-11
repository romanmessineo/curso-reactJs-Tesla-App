import React, { useContext } from "react";
import { SearchContext } from "./context/SearchContext";
import TextField from "@mui/material/TextField";

const Search = () => {
  const { search, searching } = useContext(SearchContext);

  return (
    <TextField
      id="margin-normal"
      margin="normal"
      value={search}
      onChange={searching}
      variant="outlined"
      fullWidth
      label="Buscar productos..."
      style={{ backgroundColor: "white" }}
    />
  );
};

export default Search;
