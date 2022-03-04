import React from 'react'

function OrderSummary (props) {
  return (
    <>
      <div className="border-top border-bottom px-4 fw-bold pt-4 pb-3 mt-3">
        Order Summary
      </div>
      <div className="row mx-0 font-size-14 mt-2">
        <div className="col px-4">
          Shipping
        </div>
        <div className="col text-end text-primary px-4">
          $ 250
        </div>
      </div>
      <div className="row mx-0 font-size-14 mt-2">
        <div className="col px-4">
          Item Subtotal
        </div>
        <div className="col text-end text-primary px-4">
          $ 4,920
        </div>
      </div>
      <div className="row mx-0 font-size-14 mt-2">
        <div className="col px-4">
          Coupon
        </div>
        <div className="col text-end text-primary px-4">
          -$ 200
        </div>
      </div>
      <div className="row mx-0 font-size-14 mt-2">
        <div className="col px-4">
          Credits Used
        </div>
        <div className="col text-end text-primary px-4">
          -$ 200
        </div>
      </div>
      <div className="row mx-0 font-size-14 mt-2">
        <div className="col px-4">
          Earnings Used
        </div>
        <div className="col text-end text-primary px-4">
          -$ 200
        </div>
      </div>
    </>
  )
}

export default OrderSummary