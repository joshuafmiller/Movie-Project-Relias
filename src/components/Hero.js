const Hero = ({ text, searchResults }) => {
  if (text) {
    return (
      <header className="bg-dark text-white p-5 hero-container text-center">
        <h1 className="hero-text">Searching For: {text}</h1>
        <br></br>
        <br></br>
        <h6>Results Found: {searchResults}</h6>
      </header>
    );
  } else {
    return (
      <header className="bg-dark text-white p-5 hero-container text-center">
        <h1 className="hero-text">Movie Browser</h1>
        <br></br>
        <br></br>
        <h6>
          Please use the search bar in the top right to search for a movie
        </h6>
        <h6>Click on a movie poster to see additional information</h6>
      </header>
    );
  }
};

export default Hero;
