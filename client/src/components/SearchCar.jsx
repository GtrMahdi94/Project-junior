import React from 'react'


function SearchCar() {
  return (
    <nav class="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
   <div class="container-fluid">
    <a class="navbar-brand"><img src="https://cdn4.vectorstock.com/i/1000x1000/63/58/car-logo-vector-36016358.jpg" width="3%" height="3%" /></a>

    <form class="d-flex" role="search">
      <input class="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button class="btn btn-outline-success" type="submit">Search</button>
    </form>
  </div>
  </nav>
  
  )
}

export default SearchCar