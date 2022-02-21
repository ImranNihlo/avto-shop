import React from 'react'
import SubscriptionHeader from '../Subscription/components/SubscriptionHeader'
import FreePeriodButtons from './components/FreePeriodButtons'
import PayPalButton from '../Subscription/components/PayPalButton'

function FreePeriod (props) {
  return (
    <div className="row justify-content-center mt-5 pb-5">
      <SubscriptionHeader />
      <FreePeriodButtons />
      <div className="row justify-content-center bg-light col-8 radius-1v">
        <div className="row mt-5">
          <div className="col-8">
            <h4 className="fw-bold m-0">
              'EDIT & PLOT' SUBSCRIPTION
            </h4>
            <div className="form-check mb-4 p-0">
              <small id="emailHelp" className="form-text text-black fw-bold">
                Use editor to plot downloaded patterns
              </small>
            </div>
          </div>
        </div>
        <div className="row col-11 p-0 border border-primary radius-1v pt-2 pb-3 mb-5">
          <div className="row justify-content-between m-0">
            <div className="col-5 align-self-end">
              <div className="form-check">
                <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                <label className="form-check-label fw-bold" htmlFor="flexCheckDefault">
                  30-DAYS FREE TRIAL
                </label>
              </div>
            </div>
            <div className="row col-5">
              <div className="col form-check p-0 align-self-end text-center">
                <small id="emailHelp" className="form-text text-black fw-bold">
                  Total Credit
                </small>
              </div>
              <div className="col-5">
                <div className="row text-warning fw-bold">
                  <div className="col p-0">
                    <h1 className="m-0 font-size-title">
                      $30
                    </h1>
                  </div>
                  <div className="col p-0 align-self-end">
                    /mo
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="form-check text-end fw-bold">
            <small id="emailHelp" className="form-text text-secondary font-size">
              *VAT not included in prices.
            </small>
          </div>
        </div>
        <PayPalButton />
      </div>
    </div>
  )
}

export default FreePeriod