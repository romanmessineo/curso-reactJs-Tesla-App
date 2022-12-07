const Search = () => {
  return (
    <div
      className="input-group input-group-sm"
      style={{
        webkitBoxShadow: " -12px 14px 12px -10px rgba(0,0,0,0.48)",
        mozBoxShadow: "-12px 14px 12px -10px rgba(0,0,0,0.48)",
        boxSshadow: "-12px 14px 12px -10px rgba(0,0,0,0.48)",
      }}
    >
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
