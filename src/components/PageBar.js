const PageBar = ({ setPageNumber, pageNumber, searchResults, searchText }) => {
  const totalPages = Math.ceil(searchResults / 20);
  const updatePageNumberUp = () => {
    if (pageNumber < totalPages) {
      setPageNumber(pageNumber + 1);
    }
  };
  const updatePageNumberDown = () => {
    if (pageNumber > 1) {
      setPageNumber(pageNumber - 1);
    }
  };
  if (searchText && searchResults > 0) {
    return (
      <div>
        <ul class="pagination justify-content-center">
          <li class="page-item">
            <button class="page-link" onClick={updatePageNumberDown}>
              Previous
            </button>
          </li>
          <li class="page-item">
            <button class="page-link" onClick={updatePageNumberUp}>
              Next
            </button>
          </li>
        </ul>
        <p class="text-center">
          Page: {pageNumber} of {totalPages}
        </p>
      </div>
    );
  }
//   if (searchText && searchResults == 0) {
//     return (
//       <div>
//         <h1 className="text-center">No Results Found</h1>
//         <br></br>
//         <h3 className="text-center">Please Search Again</h3>
//       </div>
//     );
//   }
};

export default PageBar;
