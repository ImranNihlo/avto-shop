import React from 'react'

function GrandTotalAndPay (props) {
  return (
    <div className="border-top mt-2 pt-3">
      <div className="row mx-0 mt-2 mb-2">
        <div className="col px-4">
          Grand Total
        </div>
        <div className="col text-end text-primary px-4">
          $4,028
        </div>
      </div>
      <p className="font-size-11 text-secondary fw-normal px-4">
        * You can not cancel your order for products that have been shipped.
      </p>
      <div className="text-center mt-4">
        <button type="button" className="btn btn-primary col-10 fw-bold radius-2v">PAY</button>
      </div>
    </div>
  )
}

export default GrandTotalAndPay
