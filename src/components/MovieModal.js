const MovieModal = ({ movie, id, posterPath }) => {
  return (
    <div
      className="modal fade"
      id={id}
      tabIndex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div className="modal-dialog">
        <div className="modal-content">
          <div className="modal-header">
            <h1 className="modal-title fs-5" id="exampleModalLabel">
              {movie.original_title}
            </h1>

            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <img
            src={posterPath}
            alt={movie.original_title}
            onError={(event) => {
              event.target.src =
                "https://placehold.jp/8b8b8d/1f1e1e/304x456.png?text=No%20Image%20Found";
              event.onerror = null;
            }}
          />
          <div className="modal-body">{movie.overview}</div>

          <div>
            <p className="text-center">
              Release Date:{" "}
              {new Date(movie.release_date).toDateString().substring(4, 15)}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MovieModal;
