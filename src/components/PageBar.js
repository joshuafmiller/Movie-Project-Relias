

const PageBar = ({setPageNumber, pageNumber, searchResults, searchText}) =>{

        const totalPages = Math.ceil(searchResults/20);
    const updatePageNumberUp = () => {
        if (pageNumber < totalPages){
        setPageNumber(pageNumber+1);
        };
    };
      const updatePageNumberDown = () => {
        if(pageNumber > 1 ){
        setPageNumber(pageNumber-1);
    };
      };
;

if(searchText){
    return (
<div>
  <ul class="pagination justify-content-center">
    <li class="page-item">
    <button class="page-link" onClick={updatePageNumberDown}>Previous</button>
    </li>
    <li class="page-item">
      <button class="page-link" onClick={updatePageNumberUp}>Next</button>
    </li>
  </ul>
  <p class="text-center">Page: {pageNumber} of {totalPages}</p>
 </div>
 


    );
    };
    
};



export default PageBar;