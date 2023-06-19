const PageBar = ({ setPageNumber, pageNumber, searchResults, searchText }) => {


  const totalPages = Math.ceil(searchResults / 20);
  const updatePageNumberUp = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
      window.scrollTo({top: 0});
  
    }
  };
  const updatePageNumberDown = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
      window.scrollTo({top: 0});

    }
  };
  if (searchText && searchResults > 0) {
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
};



export default PageBar;
