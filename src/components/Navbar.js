import debounce from "lodash.debounce";
import { useMemo } from "react";

const Navbar = ({setSearchText, setPageNumber,  }) => {
  //updating state for search text and page number
  //page number is always set back to 1 so if user is on another page, a new search will result back on page 1 results
  const updateSearchText = (e) => {
    setSearchText(e.target.value);
     setPageNumber(1);
  };

  //debounced used to delay updating searchText state so API call is not made every key change.  this allows an api call to be made after typing stops
  const debouncedResults = useMemo(() => {
    return debounce(updateSearchText, 200);
  }, [updateSearchText]);

  
  return (
    <nav className="navbar bg-body-tertiary">
      <div className="container-fluid">
        <a className="navbar-brand">Movie Browser</a>
        <form
          className="d-flex "
          role="search"
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            className="form-control me-2"
            type="text"
            placeholder="Search for a movie"
            aria-label="Search"
            onChange={debouncedResults}
          />
        </form>
      </div>
    </nav>
  );
};

export default Navbar;
