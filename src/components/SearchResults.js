import Hero from "./Hero";
import MovieCard from "./MovieCard";
import NoResults from "./NoResults";

const SearchResults = ({ data, searchText, searchResults }) => {


  //id variable is used to create a unique ID to make the modal work - requires characters not numbers(even if numbers are s string, it does not work) (target ID in the modal HTML)
  let id = "a";

  //looping through search result json and rendering card per iteration
  //movie argument in map method is the current movie data iteration
  //passing this into the movie prop to populate the MovieCard
  const cardData = data.map((movie, i) => {
    id = id + "a";
    return <MovieCard movie={movie} key={i} id={id} />;
  });


//this will display only if results from the search are present below hero
//search results and cards populate
  if (searchText && searchResults > 0) {
    return (
      <div>
        <div>
          <Hero text={searchText} data={data} searchResults={searchResults} />
        </div>
        <div className="container">
          <div className="row d-flex justify-content-center">{cardData}</div>
        </div>
      </div>
    );
  }
  //this will display if no results are found
  //no results message displayed below hero
  if (searchText && searchResults == 0) {
    return (
      <div>
        <Hero text={searchText} data={data} searchResults={searchResults} />
        <NoResults />
      </div>
    );
  //this displays by default or on form clear/no text
  //default hero is shown and nothing else
  } else {
    return (
      <div>
        <div>
          <Hero  />
        </div>
      </div>
    );
  }
};

export default SearchResults;
