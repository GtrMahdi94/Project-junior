import React,{useState} from 'react'


function SearchCar() {
  const [carsearch, setcarsearch] = useState("")


  const searchcar = () => {
    console.log(carsearch);
    props.SearchCar(carsearch);
  };

  const handleInputChange = (e) => {
    const { type , value } = e.target

    setcarsearch((carsearch) => ({
      ...carsearch,
      [type]: value,
    }));
  };

  
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
   <div className="container-fluid">
    <a className="navbar-brand"><img src="https://cdn4.vectorstock.com/i/1000x1000/63/58/car-logo-vector-36016358.jpg" width="3%" height="3%" /></a>

    <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search"/>
      <button className="btn btn-outline-success" type="submit" onClick={()=>{sarchCar()}}>Search</button>
    </form>
  </div>
  </nav>
  
  )
}

export default SearchCar