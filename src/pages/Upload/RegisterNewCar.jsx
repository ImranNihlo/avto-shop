import React from 'react'

function RegisterNewCar (props) {
  return (
    <div className="row justify-content-center">
      <div className="col-8 p-0">
        <h2 className="fw-bold">
          REGISTER NEW CAR
        </h2>
        <hr/>
        <div className="row mx-0 bg-light border radius-1v mt-5 pt-4 pb-4 mb-5">
          <div className="row justify-content-between border-bottom pb-3 mx-0">
            <div className="col">
              <h6 className="col m-0 fw-bold">
                Category
              </h6>
            </div>
          </div>
          <div className="row justify-content-between border-bottom pt-4 pb-4 mx-0">
            <div className="col-4 mb-3">
              <p className="fw-bold m-0 mb-1">
                Country
              </p>
              <input type="text" placeholder="Enter.." className="w-100 border rounded px-3"/>
            </div>
            <div className="col-4 mb-3">
              <p className="fw-bold m-0 mb-1">
                Year
              </p>
              <input type="text" placeholder="Enter.." className="w-100 border rounded px-3"/>
            </div>
            <div className="col-4 mb-3">
              <p className="fw-bold m-0 mb-1">
                Brand
              </p>
              <input type="text" placeholder="Enter.." className="w-100 border rounded px-3"/>
            </div>
            <div className="col-4 mb-3">
              <p className="fw-bold m-0 mb-1">
                Model
              </p>
              <input type="text" placeholder="Enter.." className="w-100 border rounded px-3"/>
            </div>
            <div className="col-4 mb-3">
              <p className="fw-bold m-0 mb-1">
                Sub Model
              </p>
              <input type="text" placeholder="Enter.." className="w-100 border rounded px-3"/>
            </div>
            <div className="col-4 mb-3">
              <p className="fw-bold m-0 mb-1">
                Series
              </p>
              <input type="text" placeholder="Enter.." className="w-100 border rounded px-3"/>
            </div>
          </div>
          <div className="col text-center mt-4">
            <button type="button" className="btn btn-primary col-4 radius-2v fw-bold height pb-2">
              REGISTER
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default RegisterNewCar