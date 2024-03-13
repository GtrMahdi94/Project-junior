import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from './components/List.jsx'
import AddNewCar from './components/AddNewCar.jsx'
import SearchCar from './components/SearchCar.jsx'

const App = () => {
  const [cars, setCars] = useState([])
  const [updater, setUpdater] = useState(false)
  
  
  
  
  
  const fetch = () => {
    const cars = axios.get("http://localhost:3000/api/cars/getAll")
    .then((data)=>setCars(data.data))

    .catch((error)=>console.log(error) )
  }
  
  
  
  useEffect(() => {
    fetch()
  }, [])

  const addNewCar = (body) => {
    console.log("addnewcar", body);
    axios
      .post("http://localhost:3000/api/cars/add", body)
      .then((data) => {
        setUpdater(!updater);
        console.log(data.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="bg-dark">
      <SearchCar/>
      <AddNewCar addNewCar={addNewCar}/>
      <h1>Car List</h1>
      <List cars={cars} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))