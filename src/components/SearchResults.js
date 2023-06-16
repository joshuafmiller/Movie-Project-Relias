import MovieCard from "./MovieCard";

const SearchResults = ({ data }) => {
  //looping through search result json and rendering card per iteration
  //movie argument in map method is the current movie data iteration
  //passing this into the movie prop to populate the MovieCard
  const cardData = data.map((movie, i) => {
    return <MovieCard movie={movie} key={i} />;
  });

  return (
    <div>
      <div className="container">
        <div className="row">{cardData}</div>
      </div>
    </div>
  );
};

export default SearchResults;
