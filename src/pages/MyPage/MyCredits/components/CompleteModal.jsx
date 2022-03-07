import React from 'react'

function CompleteModal (props) {
  return (
    <div className="modal-block">
      <div className="modal-block-content bg-light text-center radius-1v">
        <h5 className="fw-bold mt-4 mb-3">
          COMPLETE
        </h5>
        <p className="fw-bold px-4">
          Your refund request has been submitted successfully.<br/>
          Please check the refunded amount<br/>
          on your payPal account.
        </p>
        <div className="text-center border-top mt-4 pt-3 pb-3">
          <button type="button" className="btn btn-primary radius-2v px-5 mx-2 fw-bold">
            CONFIRM
          </button>
        </div>
      </div>
    </div>
  )
}

export default CompleteModal