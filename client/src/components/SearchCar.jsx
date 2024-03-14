import React,{useState} from 'react'


function SearchCar(props) {
  const [cartypesearch, setcarsearch] = useState("")


  const searchcar = (e) => {
    e.preventDefault()
    console.log(typeof cartypesearch);
    props.searchcar(cartypesearch);
  };

  const handleInputChange = (e) => {

    setcarsearch(  e.target.value) 

  }

  
  return (
    <nav className="navbar bg-dark border-bottom border-body" data-bs-theme="dark">
   <div className="container-fluid">
    <a className="navbar-brand"><img src="https://cdn4.vectorstock.com/i/1000x1000/63/58/car-logo-vector-36016358.jpg" width="4%" height="4%" onClick={()=>{props.fetch()}} /></a>
    <form onSubmit={(e)=>{searchcar(e)} } className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" onChange={handleInputChange} />
      <button className="btn btn-outline-success"   type="submit" >Search</button>
    </form>
  </div>
  </nav>
  )
}

export default SearchCar