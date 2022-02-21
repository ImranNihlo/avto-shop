import React from 'react'

function PayPalCards (props) {
  return (
    <div className="row justify-content-between text-center mb-5">
      <div className="col border fw-bold subscription-border subscription-right radius-1v">
        <h6 className="fw-bold mt-4 mb-4">
          STANDARD
        </h6>
        <h1 className="text-warning m-0 fw-bold font-size-title">
          $50
        </h1>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            *VAT not included in prices.
          </small>
        </div>
        <hr/>
        <div className="form-check mb-3 p-0">
          <small id="emailHelp" className="form-text text-black font-size">
            50 Credit
          </small>
        </div>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            Total Credit
          </small>
          <h6 className="fw-bold">
            50 Credit
          </h6>
        </div>
      </div>
      <div className="col border fw-bold subscription-border subscription-right radius-1v">
        <h6 className="fw-bold mt-4 mb-4">
          PLUS
        </h6>
        <h1 className="text-warning m-0 fw-bold font-size-title">
          $100
        </h1>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            *VAT not included in prices.
          </small>
        </div>
        <hr/>
        <div className="form-check mb-3 p-0">
          <small id="emailHelp" className="form-text text-black font-size">
            100 Credit + 5 Credit
          </small>
        </div>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            Total Credit
          </small>
          <h6 className="fw-bold">
            105 Credit
          </h6>
        </div>
      </div>
      <div className="col border fw-bold subscription-border subscription-right radius-1v">
        <h6 className="fw-bold mt-4 mb-4">
          PREMIUM
        </h6>
        <h1 className="text-warning m-0 fw-bold font-size-title">
          $250
        </h1>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            *VAT not included in prices.
          </small>
        </div>
        <hr/>
        <div className="form-check mb-3 p-0">
          <small id="emailHelp" className="form-text text-black font-size">
            250 Credit + 20 Credit
          </small>
        </div>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            Total Credit
          </small>
          <h6 className="fw-bold">
            270 Credit
          </h6>
        </div>
      </div>
      <div className="col border fw-bold subscription-border radius-1v">
        <h6 className="fw-bold mt-4 mb-4">
          GOLD
        </h6>
        <h1 className="text-warning m-0 fw-bold font-size-title">
          $1000
        </h1>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            *VAT not included in prices.
          </small>
        </div>
        <hr/>
        <div className="form-check mb-3 p-0">
          <small id="emailHelp" className="form-text text-black font-size">
            1000 Credit + 30 Credit
          </small>
        </div>
        <div className="form-check mb-4 p-0">
          <small id="emailHelp" className="form-text text-secondary font-size">
            Total Credit
          </small>
          <h6 className="fw-bold">
            1130 Credit
          </h6>
        </div>
      </div>
    </div>
  )
}

export default PayPalCards;