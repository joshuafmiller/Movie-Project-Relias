import Hero from "./Hero";
import MovieCard from "./MovieCard";

const SearchResults = ({ data, searchText, searchResults}) => {
  //looping through search result json and rendering card per iteration
  //movie argument in map method is the current movie data iteration
  //passing this into the movie prop to populate the MovieCard

  //id variable is used to create a unique ID to make the modal work - requires characters not numbers (target ID in the modal HTML)
  let id = "a";
  const cardData = data.map((movie, i) => {
    id = id + "a";
    return <MovieCard movie={movie} key={i} id={id} />;
  });

if(searchText){
  return (
    <div>
        <div>
        <Hero text={searchText} data={data} searchResults={searchResults}/>
        </div>
      <div className="container">
        <div className="row">{cardData}</div>
      </div>
    </div>
  );
}
else{
    return (
        <div>
            <div>
            <Hero text={searchText} data={data} searchResults={searchResults}/>
            </div>
        </div>
      );
};

};

export default SearchResults;
