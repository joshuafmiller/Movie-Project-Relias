

const MovieModal = ({movie, id, posterPath}) => {

    console.log(id);

    return(
<div class="modal fade" id={id} tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div class="modal-dialog">
    <div class="modal-content">
      <div class="modal-header">
        <h1 class="modal-title fs-5" id="exampleModalLabel">{movie.original_title}</h1>
        
        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <img
        src={posterPath}
        // className="card-img-top "
        alt={movie.original_title}
        // style={{ height: "700px" }}
        onError={(event) => {
          event.target.src =
            "https://placehold.jp/8b8b8d/1f1e1e/304x456.png?text=No%20Image%20Found";
          event.onerror = null;
        }}
      />
      <div class="modal-body">
        {movie.overview}
      </div>
      
      <div>
        <p className="text-center">Release Date: {movie.release_date}</p>
        {/* <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Close</button> */}
      </div>
    </div>
  </div>
</div>
    );
};

export default MovieModal;