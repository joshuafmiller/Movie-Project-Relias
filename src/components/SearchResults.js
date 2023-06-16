import MovieCard from "./MovieCard";

const SearchResults = ({data}) =>{

     const cardData = data.map((obj) => {
        return <MovieCard movie = {obj}/>
});

    return (
        <div>
            <div className='container'>
                    <div className="row">
                        {cardData}
                    </div>
        </div>
        </div>
    );
};

export default SearchResults;


