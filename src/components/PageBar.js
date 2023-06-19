const PageBar = ({ setPageNumber, pageNumber, searchResults, searchText }) => {
  const totalPages = Math.ceil(searchResults / 20);

  //scrollTo is added to the function called on button click so when user goes to previous or next page, they get brought back to the top
  const updatePageNumberUp = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      window.scrollTo({ top: 0 });
    }
  };

  //scrollTo is added to the function called on button click so when user goes to previous or next page, they get brought back to the top
  const updatePageNumberDown = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      window.scrollTo({ top: 0 });
    }
  };
  if (searchText && searchResults > 0 && totalPages > 1) {
    return (
      <div>
        <ul className="pagination justify-content-center">
          <li className="page-item">
            <button className="page-link" onClick={updatePageNumberDown}>
              Previous
            </button>
          </li>
          <li className="page-item">
            <button className="page-link" onClick={updatePageNumberUp}>
              Next
            </button>
          </li>
        </ul>
        <p className="text-center">
          Page: {pageNumber} of {totalPages}
        </p>
      </div>
    );
  }
  //if only 1 page, do not display page buttons
  if (searchText && searchResults > 0 && totalPages == 1) {
    return (
      <p className="text-center">
        Page: {pageNumber} of {totalPages}
      </p>
    );
  }
};

export default PageBar;
