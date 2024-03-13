import React,{useState} from 'react'

export default function AddNewCar(props) {
  const [car, setCar] = useState({
    type: "",
    Model: "",
    year: "",
    kilometre:0,
    price: 0,
    imgUrl: "",
    contact:0,
    description:""
  });

  const addnew = () => {
    console.log(car);
    props.addNewCar(car);
  };

  const handleInputChange = (e) => {
    const { name , value } = e.target

    setCar((car) => ({
      ...car,
      [name]: value,
    }));
  };
  return (
    <>
   
    
<button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal" data-bs-whatever="@getbootstrap">Add New Car</button>

<div className="modal fade" id="exampleModal" tabindex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
  <div className="modal-dialog">
    <div className="modal-content">
      <div className="modal-header">
        <h5 className="modal-title" id="exampleModalLabel">New message</h5>
        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
      </div>
      <div className="modal-body">
        <form>
          <div className="mb-3">
            <label for="recipient-name" className="col-form-label">Type:</label>
            <input type="text" className="form-control" id="type"  name="type "onChange={handleInputChange}/>
            <label for="recipient-name" className="col-form-label">Model:</label>
            <input type="text" className="form-control" id="Model" name="Model" onChange={handleInputChange}/>
            <label for="recipient-name" className="col-form-label">Year:</label>
            <input type="date" className="form-control" id="Year" name="year" onChange={handleInputChange}/>
            <label for="recipient-name" className="col-form-label">Kilometre:</label>
            <input type="number" className="form-control" id="kilometre" name="kilometre"  onChange={handleInputChange}/>
            <label for="recipient-name" className="col-form-label">Price:</label>
            <input type="number" className="form-control" id="price"  name="price" onChange={handleInputChange}/>
            <label for="recipient-name" className="col-form-label">Contact:</label>
            <input type="number" className="form-control" id="contact" name="contact" onChange={handleInputChange}/>
            <label for="recipient-name" className="col-form-label">Image Url:</label>
            <input type="text" className="form-control" id="imgUrl" name="imgUrl" onChange={handleInputChange}/>
          </div>
          <div className="mb-3">
            <label for="message-text" className="description">description:</label>
            <textarea className="form-control" id="message-text" name="description" onChange={handleInputChange}></textarea>
          </div>
        </form>
      </div>
      <div className="modal-footer">

        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
        <button type="button" className="btn btn-primary" onClick={()=>addnew()}>Add Now</button>
      </div>
    </div>
  </div>
</div>
    </>
  )
}