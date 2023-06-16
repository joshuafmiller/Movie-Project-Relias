
const MovieCard = ({movie}) => {

const posterPath = `https://image.tmdb.org/t/p/original${movie.poster_path}`

return (
    <div class="card" style={{width: '15rem'}}>
<img src={posterPath} class="card-img-top" alt="..." />
<div class="card-body">
<h5 class="card-title">{movie.original_title}</h5>
<p class="card-text">Some quick example text to build on the card title and make up the bulk of the card's content.</p>
<a href="#" class="btn btn-primary">Go somewhere</a>
</div>
</div>
);


};

export default MovieCard;