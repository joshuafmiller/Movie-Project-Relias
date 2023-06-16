const MovieCard = ({ movie }) => {
  const posterPath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  //figure out why cards are not centered in middle of screen properly
  return (
    <div className="card m-1 p-0" style={{ width: "14rem" }}>
      <img
        src={posterPath}
        className="card-img-top"
        alt={movie.original_title}
        style={{ height: "321px" }}
        onError={(event) => {
          event.target.src =
            "https://placehold.jp/8b8b8d/1f1e1e/304x456.png?text=No%20Image%20Found";
          event.onerror = null;
        }}
      />
      <div className="card-body">
        <h5 className="card-title text-center">{movie.original_title}</h5>
        {/* <a href="#" class="btn btn-primary">Movie Details</a> */}
      </div>
    </div>
  );
};

export default MovieCard;
