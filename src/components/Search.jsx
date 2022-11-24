import React from "react";

const Search = () => {
  return (
    <div class="input-group input-group-sm mb-3 ">
      <span class="input-group-text" id="inputGroup-sizing-sm">
        Buscar
      </span>
      <input
        type="text"
        class="form-control"
        aria-label="Sizing example input"
        aria-describedby="inputGroup-sizing-sm"
      />
    </div>
  );
};

export default Search;
