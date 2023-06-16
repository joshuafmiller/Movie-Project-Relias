
// go back and add buttons for other pages/links
const Navbar = ({searchText, setSearchText}) => {

  const updateSearchText = (e) => {
    setSearchText(e.target.value)
  }

return (

<nav class="navbar bg-body-tertiary">
  <div class="container-fluid">
    <a class="navbar-brand">Movie Browser</a>
    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search for a movie" aria-label="Search" value = {searchText} onChange ={updateSearchText}/>
    </form>
  </div>
</nav>
  

);

};


export default Navbar;

