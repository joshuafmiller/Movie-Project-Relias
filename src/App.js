
import { useEffect, useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import SearchResults from './components/SearchResults';

function App() {

  const [searchData, setSearchData] = useState([]);
  const [searchText, setSearchText] = useState('');

  useEffect (() => {
    if(searchText){

      fetch(`https://api.themoviedb.org/3/search/movie?api_key=865af2d7a2841663c7ddbf893658cbac&language=en-US&query=${searchText}&page=1&include_adult=false`)
      .then(response => response.json())
      .then(data => {
        console.log(data.results)
        setSearchData(data.results)
      })
    }
  }, [searchText])



  return (
    <div >
      <Navbar searchText = {searchText} setSearchText = {setSearchText}/>
      <SearchResults data = {searchData}/>
    </div>
  );
}

export default App;
