import React from 'react'
import "../modalsUpload.css"

function PayUpload (props) {
  return (
    <div className="modal-block">
      <div className="modal-block-content bg-light col-4">
        <h5 className="text-white bg-black text-center pt-3 pb-3">
          PAY WITHE EARNINGS
        </h5>
        <div className="px-5">
          <h5 className="fw-bold pt-4 pb-4">
            Current balance: 35,522 USD
          </h5>
          <p className="fw-bold mb-1">
            Amount
          </p>
          <div className="row justify-content-between mx-0 mb-4">
            <input type="text" className="col-11 pt-1 pb-1"/>
            <div className="fw-bold col-1 align-self-center">
              USD
            </div>
          </div>
          <p className="fw-bold text-primary">
            remaining balance: 35,000USD
          </p>
        </div>
        <div className="text-center border-top mt-4 pt-3 pb-3">
          <button type="button" className="btn btn-light border-dark radius-2v px-5 mx-2 fw-bold">CANCEL</button>
          <button type="button" className="btn btn-primary radius-2v px-5 mx-2 fw-bold">PAYMENT</button>
        </div>
      </div>
    </div>
  )
}

export default PayUpload