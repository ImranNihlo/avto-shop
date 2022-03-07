import React from 'react'

function BonusCreditDivAndButton (props) {
  return (
    <>
      <div className="text-center bg-gray radius-1v pt-3 pb-3 mx-4 mt-4">
        <h5 className="m-0 fw-bold">
          You are entitled to <span className="text-warning">0 Bonus Credits.</span>
        </h5>
      </div>
      <div className="text-center mt-5 mb-5">
        <button type="button" className="btn btn-primary radius-2v col-6 height shadow">
          GET BONUS CREDIT
        </button>
      </div>
    </>
  )
}

export default BonusCreditDivAndButton