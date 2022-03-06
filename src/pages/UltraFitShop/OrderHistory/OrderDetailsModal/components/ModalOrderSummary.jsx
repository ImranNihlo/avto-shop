import React from 'react'

function ModalOrderSummary (props) {
  return (
    <>
      <p className="fw-bold pt-3 m-0 pb-1">
        Order Summary
      </p>
      <div className="row border mx-0 radius-1v">
        <div className="row mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Item Subtotal
          </div>
          <div className="col-8">
            $2,460
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Discount
          </div>
          <div className="col-8">
            $ 646
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Coupon
          </div>
          <div className="col-8">
            -$ 246
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Earnings Used
          </div>
          <div className="col-8">
            -$ 200
          </div>
        </div>
        <div className="row border-top mx-0 pt-2 pb-2">
          <div className="col-4 border-end text-size text-secondary align-self-center">
            Earnings Used
          </div>
          <div className="col-8">
            -$ 200
          </div>
        </div>
      </div>
    </>
  )
}

export default ModalOrderSummary