import React from 'react'

function ModalShippingAddress (props) {
  return (
    <>
      <p className="fw-bold pt-3 m-0 pb-1">
        Shipping address
      </p>
      <div className="row border mx-0 radius-1v mb-4">
        <div className="row mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Country
          </div>
          <div className="col-8">
            United States
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Address 1
          </div>
          <div className="col-8">
            5515 NE 148TH AVE STE 302
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Address 2
          </div>
          <div className="col-8">
            312 Cherry Lane
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Town/City
          </div>
          <div className="col-8">
            California
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Region
          </div>
          <div className="col-8">
            California
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            ZIP/Postal Code
          </div>
          <div className="col-8">
            90746
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            VAT/TAX ID
          </div>
          <div className="col-8 pt-3 pb-2">

          </div>
        </div>
      </div>
    </>
  )
}

export default ModalShippingAddress