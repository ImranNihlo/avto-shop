import React from 'react'
import UploadHeader from '../components/UploadHeader'
import ProfitDetailsInputs from './components/ProfitDetailsInputs'
import "../upload.css"

function ProfitDetails (props) {
  return (
    <div className="row justify-content-center pt-5 pb-5">
      <UploadHeader />
      <h5 className="col-8 text-start fw-bold p-0 mb-3">
        PROFIT WITHDRAWAL DETAILS
      </h5>
      <div className="col-8 border bg-light radius-1v p-0 shadow pt-4 pb-4">
        <div className="col px-4 mb-4">
          <span className="fw-bold">
            Current balance
          </span>
          <div className="vr mx-2">

          </div>
          <span className="fw-bold text-primary fs-5">
            35,522
          </span>
          <span className="fw-bold px-1 fs-5">
            USD
          </span>
        </div>
        <div className="col fw-bold px-4">
          <p className="mb-1">
            Amount
          </p>
          <input type="text" className="col-4 border-0 rounded pb-2 pt-1"/>
          <span className="mx-1">
            USD
          </span>
          <p className="text-primary mt-2">
            remaining balance: 35,000USD
          </p>
        </div>
        <ProfitDetailsInputs />
        <div className="border-top border-bottom pt-4 pb-4 mt-4">
          <div className="form-check mx-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
              <label className="form-check-label fw-bold" htmlFor="flexCheckDefault">
                Agree to PayPal policy
              </label>
          </div>
          <div className="form-check mx-4">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault20"/>
              <label className="form-check-label fw-bold" htmlFor="flexCheckDefault20">
                Agree to Collect and use of personal information
              </label>
          </div>
          <p className="text-secondary mx-4 m-0 mt-3 font-size-14">
            * The payout will be proceeded through the personal paypal account. If you don't have a PayPal account,
            please create one. PayPal transaction fee will  be a burden of a receiver.
          </p>
        </div>
        <div className="text-center pt-3">
          <p className="text-danger m-0 mb-2 font-size-14">
            Please agree to PayPal policy
          </p>
          <button type="button" className="btn btn-primary radius-2v col-5 fw-bold">WITHDRAWAL REQUEST</button>
        </div>
      </div>
    </div>
  )
}

export default ProfitDetails