import React from 'react'
import x7 from '../../Images/x7.jpg'
import mers from '../../Images/g-class.jpg'

function OrderHistoryCards (props) {
  return (
    <>
      <div className="row justify-content-between mx-0 mb-3">
        <div className="col-1 text-center align-self-center">
          <input className="form-check-input" type="checkbox" value="" id="orderHistoryCheck1"/>
        </div>
        <div className="col-5 p-0">
          <div className="row justify-content-between">
            <div className="col-3 p-0">
              <img src={x7} alt="x7" height={100} className="w-100 radius-1v"/>
            </div>
            <div className="col p-0 align-self-center mx-2">
              <p className="m-0 fw-bold">
                ULTRAFIT LICENSE PLATE COVER
              </p>
              <p className="m-0 text-secondary">
                Window Film
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 text-center align-self-center fw-bold">
          1
        </div>
        <div className="col-1 text-end align-self-center fw-bold">
          $1,230
        </div>
        <div className="col-3 text-end align-self-center">
          <p className="px-5 m-0 fw-bold">
            Shipping
          </p>
          <p className="text-primary px-4 m-0 cursor">
            <u>
              Delivery Tracking
            </u>
          </p>
        </div>
      </div>
      <div className="row justify-content-between mx-0 mb-3">
        <div className="col-1 text-center align-self-center">
          <input className="form-check-input" type="checkbox" value="" id="orderHistoryCheck1"/>
        </div>
        <div className="col-5 p-0">
          <div className="row justify-content-between">
            <div className="col-3 p-0">
              <img src={mers} alt="mers" height={100} className="w-100 radius-1v"/>
            </div>
            <div className="col p-0 align-self-center mx-2">
              <p className="m-0 fw-bold">
                ULTRAFIT LICENSE PLATE COVER
              </p>
              <p className="m-0 text-secondary">
                Window Film
              </p>
            </div>
          </div>
        </div>
        <div className="col-2 text-center align-self-center fw-bold">
          2
        </div>
        <div className="col-1 text-end align-self-center fw-bold">
          $1,230
        </div>
        <div className="col-3 text-end align-self-center">
          <p className="px-5 m-0 fw-bold">
            Shipping
          </p>
          <p className="text-primary px-4 m-0 cursor">
            <u>
              Delivery Tracking
            </u>
          </p>
        </div>
      </div>
    </>
  )
}

export default OrderHistoryCards