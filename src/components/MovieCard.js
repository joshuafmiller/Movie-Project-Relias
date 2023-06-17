import MovieModal from "./MovieModal";

const MovieCard = ({ movie, id }) => {
  const posterPath = `https://image.tmdb.org/t/p/original${movie.poster_path}`;

  return (
    
    <div
      className="card m-1 p-0 shadow-lg"
      style={{ width: "14rem" }}
      type="button"
      data-bs-toggle="modal"
      data-bs-target={"#" + id}
    >
      <img
        src={posterPath}
        className="card-img-top card-hover"
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
        <MovieModal movie={movie} id={id} posterPath={posterPath} />
      </div>
    </div>

  );
};

export default MovieCard;
