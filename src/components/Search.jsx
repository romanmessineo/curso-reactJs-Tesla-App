import React from "react";

const Search = () => {
  return (
    <div className="input-group input-group-sm mb-3 ">
      <span className="input-group-text" id="inputGroup-sizing-sm">
        Buscar
      </span>
      <input
        type="text"
        className="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
};

export default Search;
