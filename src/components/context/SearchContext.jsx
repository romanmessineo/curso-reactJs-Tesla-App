import React, { useState, createContext } from "react";

export const SearchContext = createContext();

const SearchContextProvider = ({ children }) => {
  const [search, setSearch] = useState(``);

  const searching = (e) => {
    setSearch(e.target.value);
    console.log(e.target.value);
  };
  return (
    <SearchContext.Provider value={{ search, searching }}>
      {children}
    </SearchContext.Provider>
  );
};

export default SearchContextProvider;
