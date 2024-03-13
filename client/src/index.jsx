import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from './components/List.jsx'
import AddNewCar from './components/AddNewCar.jsx'
import SearchCar from './components/SearchCar.jsx'
import ListCars from './components/ListCars.jsx'

const App = () => {
  const [cars, setCars] = useState([])
  const [updater, setUpdater] = useState(false)
  
  
  
  
/// view  
  const fetch = () => {
    const cars = axios.get("http://localhost:3000/api/cars/getAll")
    .then((data)=>setCars(data.data))

    .catch((error)=>console.log(error) )
  }

  useEffect(() => {
    fetch()
  }, [updater])

  ///\\\

  //// search \\\\
  const searchcar = (body) => {
    console.log("searchcar", body);
    axios
      .post("http://localhost:3000/api/cars/search", body)
      .then((data) => {
        setUpdater(!updater);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

////\\\\


  //// delete \\\\

  const deletecar = (id) => {
    axios.delete(`http://localhost:3000/api/cars/delete${id}`)
      .then((data) => {setUpdater(!updater)})
      .catch((err) => {
        console.log(err);
      });
  };
////\\\\

  //// add new car \\\\

  const addNewCar = (body) => {
    console.log("addnewcar", body);
    axios
      .post("http://localhost:3000/api/cars/add", body)
      .then((data) => {setUpdater(!updater);
      })
      .catch((err) => {
        console.log(err);
      });
  };



////\\\\

  return (
    <div className="bg-dark">
      {/* <ListCars deletecar={deletecar}/> */}
      <SearchCar searchcar={searchcar}/>
      <AddNewCar addNewCar={addNewCar}/>
      <h1> Cars Ready For Sell </h1>
      <List cars={cars}  deletecar={deletecar} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))