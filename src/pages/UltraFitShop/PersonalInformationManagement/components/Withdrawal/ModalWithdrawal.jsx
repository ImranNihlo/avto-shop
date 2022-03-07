import React from 'react'

function ModalWithdrawal (props) {
  return (
    <div className="modal-block">
      <div className="modal-block-content bg-light text-center pt-4 pb-3 radius-1v">
        <h5 className="fw-bold mb-3 px-5">
          WITHDRAWAL
        </h5>
        <p className="fw-bold font-size-14 mb-5 px-5">
          Are you sure you want to delete your account?
        </p>
        <div className="border-top pt-3">
          <button type="button" className="btn btn-light border-dark radius-2v col-4 mx-1 fw-bold">NO</button>
          <button type="button" className="btn btn-primary radius-2v col-4 mx-1 fw-bold">YES</button>
        </div>
      </div>
    </div>
  )
}

export default ModalWithdrawal