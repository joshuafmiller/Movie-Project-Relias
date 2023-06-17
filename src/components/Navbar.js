// go back and add buttons for other pages/links
const Navbar = ({ searchText, setSearchText, setPageNumber }) => {
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
    setPageNumber(1);
  };

  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Movie Browser</a>
        <form className="d-flex " role="search" onSubmit={e => {e.preventDefault();}}>
          <input
            className="form-control me-2"
            type="search"
            placeholder="Search for a movie"
            aria-label="Search"
            value={searchText}
            onChange={updateSearchText}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
