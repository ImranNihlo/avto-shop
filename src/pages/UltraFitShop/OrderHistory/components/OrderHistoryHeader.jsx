import React from 'react'

function OrderHistoryHeader (props) {
  return (
    <div className="row justify-content-between mx-0 pt-3 pb-3 fw-bold bg-colors border-title">
      <div className="col-1 text-center">
        <input className="form-check-input" type="checkbox" value="" id="orderHistoryCheck"/>
      </div>
      <div className="col-5 text-center">
        Product
      </div>
      <div className="col-2 text-center">
        Quantity
      </div>
      <div className="col-1 text-center">
        Cost
      </div>
      <div className="col-3 text-end">
        Shipping information
      </div>
    </div>
  )
}

export default OrderHistoryHeader