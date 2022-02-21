import React from 'react'
import paypal from '../../Payment/Images/2381291.png'

function PayPalButton (props) {
  return (
    <>
      <button type="button" className="btn btn-primary btn-lg col-4 radius-2v mb-5">
        <p className="fst-italic m-0">
          <img src={paypal} alt="paypal" width={20} height={20}/>
          PayPal
        </p>
      </button>
    </>
  )
}

export default PayPalButton