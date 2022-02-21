import React from 'react'
import "./subscription.css"
import paypal from "../Payment/Images/2381291.png"
import PayPalCards from './components/PayPalCards'
import SubscriptionButtons from './components/SubscriptionButtons'
import SubscriptionHeader from './components/SubscriptionHeader'
import PayPalButton from './components/PayPalButton'

function Subscription (props) {
  return (
    <div className="row justify-content-center mt-5 pb-5">
      <SubscriptionHeader />
      <SubscriptionButtons />
      <div className="row justify-content-center bg-light col-8 radius-1v">
        <div className="row mt-5">
          <div className="col-8">
            <h4 className="fw-bold m-0">
              CREDIT PACKS
            </h4>
            <div className="form-check mb-4 p-0">
              <small id="emailHelp" className="form-text text-black fw-bold">
                Buy credits to download patterns
              </small>
            </div>
          </div>
        </div>
        <PayPalCards />
        <div className="form-check mb-4 p-0 text-center">
          <small id="emailHelp" className="form-text text-black fw-bold">
            Please select the desired credit pack. (Duplicate selection is possible)
          </small>
        </div>
        <h4 className="text-primary text-center fw-bold">
          Total: $0
        </h4>
        <PayPalButton />
      </div>
    </div>
  )
}

export default Subscription