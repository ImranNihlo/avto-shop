import React from 'react'

function ModalOrderDetails (props) {
  return (
    <>
      <p className="fw-bold pt-3 m-0 pb-1">
        Order Details
      </p>
      <div className="row border mx-0 radius-1v">
        <div className="row mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Order date
          </div>
          <div className="col-8">
            2021.12.28
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Ship To
          </div>
          <div className="col-8">
            Gilldong Hong
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalOrderDetails