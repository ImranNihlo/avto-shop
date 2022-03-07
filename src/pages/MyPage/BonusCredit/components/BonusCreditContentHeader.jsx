import React from 'react'

function BonusCreditContentHeader (props) {
  return (
    <div className="border-bottom px-4 pb-3">
      <p className="m-0 fw-bold mb-1">
        Product serial number
      </p>
      <div className="row col-6 justify-content-between m-0 border rounded bg-white">
        <div className="col-9 p-0">
          <input type="email" className="form-control border-0 height"
                 id="exampleInputEmail1"
                 aria-describedby="emailHelp"/>
        </div>
        <div className="col-3 align-self-center text-center p-0">
          <button type="button" className="btn btn-primary btn-sm radius-1v">
            CONFIRM
          </button>
        </div>
      </div>
      <span className="text-danger font-size-14 fw-bold">
          The serial number does not exist.
          </span>
    </div>
  )
}

export default BonusCreditContentHeader