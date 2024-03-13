
import React, { useEffect, useState } from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import List from './components/List.jsx'

const App = () => {
  const [cars, setCars] = useState([])

  useEffect(() => {
    // $.ajax({
    //   url: '/api/cars/getAll',
    //   success: (data) => {
    //     console.log(data)
    //     setCars(data)
    //   },
    //   error: (err) => {
    //     console.log('err', err)
    //   },
    // })
    const cars = axios.get("http://localhost:3000/api/cars/getAll")
    // .then((data)=>setCars(data))
    .then((data)=>setCars(data.data))

    .catch((error)=>console.log(error) )
  }, [])

  return (
    <div>
      <h1>Add New Car</h1>
      <h1>Car List</h1>
      <List cars={cars} />
    </div>
  )
}

ReactDOM.render(<App />, document.getElementById('app'))