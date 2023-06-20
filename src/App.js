import { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import SearchResults from "./components/SearchResults";
import PageBar from "./components/PageBar";

function App() {
  const apiKey = "7eabe1f7ec403601dd3d824d503ad6f3";
  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState("");
  const [searchResults, setSearchResults] = useState([]);
  const [pageNumber, setPageNumber] = useState(1);

  useEffect(() => {
    if (searchText) {
      fetch(
        `https://api.themoviedb.org/3/search/movie?api_key=${apiKey}&language=en-US&query=${searchText}&page=${pageNumber}&include_adult=false`
      )
        .then((response) => response.json())
        .then((data) => {
          setSearchData(data.results);
          setSearchResults(data.total_results);
        })
        .catch((error) => {
          //TODO: do real error handling
          console.log(error);
        });
    }
  }, [searchText, pageNumber]);

  return (
    <div>
      <Navbar
        setSearchText={setSearchText}
        setPageNumber={setPageNumber}
      />
      <SearchResults
        data={searchData}
        searchText={searchText}
        searchResults={searchResults}
      />
      <PageBar
        setPageNumber={setPageNumber}
        pageNumber={pageNumber}
        searchResults={searchResults}
        searchText={searchText}
      />
    </div>
  );
}

export default App;
