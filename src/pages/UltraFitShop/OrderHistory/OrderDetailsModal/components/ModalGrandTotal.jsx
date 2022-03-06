import React from 'react'
import x7 from '../../../Images/x7.jpg'
import mers from '../../../Images/g-class.jpg'

function ModalGrandTotal (props) {
  return (
    <>
      <div className="row mt-3">
        <h5 className="col fw-bold m-0">
          Grand Total
        </h5>
        <h5 className="col fw-bold text-primary text-end m-0">
          $ 1,814
        </h5>
      </div>
      <p className="fw-bold pt-3 m-0 pb-1">
        Order Summary
      </p>
      <div className="border text-size fw-bold pt-3 radius-1v">
        <div className="row justify-content-between mx-0 mb-3">
          <div className="col-3">
            <img src={x7} alt="x7" className="w-100 radius-1v"/>
          </div>
          <div className="col-7 p-0 align-self-center mb-1">
            <p className="m-0">
              ULTRAFIT LICENSE PLATE COVER
            </p>
            <p className="m-0 text-secondary fw-normal">
              Quarter: 1 EA
            </p>
          </div>
          <div className="col-2 align-self-center">
            $1,230
          </div>
        </div>
        <div className="row justify-content-between mx-0 mb-3">
          <div className="col-3">
            <img src={mers} alt="mers" className="w-100 radius-1v"/>
          </div>
          <div className="col-7 p-0 align-self-center mb-1">
            <p className="m-0">
              ULTRAFIT LICENSE PLATE COVER
            </p>
            <p className="m-0 text-secondary fw-normal">
              Quarter: 1 EA
            </p>
          </div>
          <div className="col-2 align-self-center">
            $1,230
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalGrandTotal