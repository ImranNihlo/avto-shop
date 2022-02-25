import React from 'react'

function PricePerArea (props) {
  return (
    <>
      <h6 className="fw-bold px-4 mt-4">
        Price Per Area
      </h6>
      <div className="row justify-content-between px-4">
        <div className="btn-group bg-light p-0" role="group" aria-label="Basic checkbox toggle button group">
          <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off"/>
          <label className="btn btn-outline-primary border height"
                 htmlFor="btncheck6">
            0.5 Credit
          </label>

          <input type="checkbox" className="btn-check" id="btncheck7" autoComplete="off"/>
          <label className="btn btn-outline-primary border height"
                 htmlFor="btncheck7">
            1.0 Credit
          </label>

          <input type="checkbox" className="btn-check" id="btncheck8" autoComplete="off"/>
          <label className="btn btn-outline-primary border height"
                 htmlFor="btncheck8">
            1.5 Credit
          </label>

          <input type="checkbox" className="btn-check" id="btncheck9" autoComplete="off"/>
          <label className="btn btn-outline-primary border height"
                 htmlFor="btncheck9">
            2.0 Credit
          </label>
        </div>
      </div>
    </>
  )
}

export default PricePerArea