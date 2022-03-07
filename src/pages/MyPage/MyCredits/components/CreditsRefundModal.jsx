import React from 'react'

function CreditsRefundModal (props) {
  return (
    <div className="modal-block">
      <div className="modal-block-content bg-light text-center">
        <h5 className="text-white bg-black pt-3 pb-3">
          CREDITS REFUND
        </h5>
        <div className="row mt-4 mb-4 mx-0">
          <div className="col-4">
            <p className="text-secondary m-0 fw-bold">
              My credit
            </p>
            <h5 className="fw-bold mt-2">
              7,695 Credit
            </h5>
          </div>
          <div className="col-4 border-start border-end">
            <p className="text-secondary m-0 fw-bold">
              Bonus credit
            </p>
            <h5 className="fw-bold mt-2">
              0 Credit
            </h5>
          </div>
          <div className="col-4">
            <p className="text-secondary m-0 fw-bold">
              Total credit
            </p>
            <h5 className="fw-bold mt-2">
              50 Credit
            </h5>
          </div>
        </div>
        <div className="border-top pt-4">
          <p className="text-secondary fw-bold m-0">
            Credits to be refunded.
          </p>
          <h5 className="fw-bold mt-2 mb-4">
            50 Credit
          </h5>
          <p className="text-secondary font-size-14 px-4">
            *Credit refund is only available within in the 7days from the initial payments date<br/>
            if no credit transaction has occurred during that period.
          </p>
        </div>
        <div className="text-center border-top mt-5 pt-3 pb-3">
          <button type="button" className="btn btn-light border-dark radius-2v px-5 mx-2 fw-bold">
            CANCEL
          </button>
          <button type="button" className="btn btn-primary radius-2v px-5 mx-2 fw-bold">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  )
}

export default CreditsRefundModal