import Hero from "./Hero";
import MovieCard from "./MovieCard";
import NoResults from "./NoResults";
import { useMemo } from "react";

const SearchResults = ({ data, searchText, searchResults }) => {

  //looping through search result json and rendering card per iteration
  //movie argument in map method is the current movie data iteration
  //passing this into the movie prop to populate the MovieCard
  //pulling ID to pass into the MovieCard to create a unique ID for the HTML for the modals to work
  const cardData = useMemo(() => {return data.map((movie, i) => {
    const id = movie.id;
    return <MovieCard movie={movie} key={i} id={id} />;
  });
}, [data]);

  //this will display only if results from the search are present below hero
  //search results and cards populate
  if (searchText && searchResults > 0) {
    return (
      <div>
        <Hero text={searchText} data={data} searchResults={searchResults} />
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
        <Hero />
      </div>
    );
  }
};

export default SearchResults;
