import React from 'react'
import car_line from "../../images/car_line.svg"

function AddPattern (props) {
  return (
    <div className="row">
      <div className="text-center pt-2 pb-4">
        <button type="button" className="btn text-primary fw-bold radius-1v">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
               className="bi bi-plus-circle mb-1 mx-1" viewBox="0 0 16 16">
            <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
            <path
              d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
          </svg>
          Upload pattern
        </button>
      </div>
      <hr/>
      <h6 className="fw-bold px-4 mt-4 m-0">
        Custom Coverage
      </h6>
      <div className="form-check">
        <small id="emailHelp" className="form-text text-secondary">
          See the pattern that you have uploaded for the specific part of the car.
        </small>
      </div>
      <div className="col-12 text-center pt-5 pb-5 border-bottom">
        <img src={car_line} alt="car_line" className="col-8"/>
      </div>
      <div className="col-12 text-center mt-5">
        <button type="button" className="btn btn-primary col-4 radius-2v fw-bold height pb-2">
          Approval request
        </button>
      </div>
    </div>
  )
}

export default AddPattern