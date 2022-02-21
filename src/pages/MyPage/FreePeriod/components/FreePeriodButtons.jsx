import React from 'react'

function FreePeriodButtons (props) {
  return (
    <div className="row justify-content-center p-0 mb-5">
      <div className="col-4 p-0">
        <button type="button" className="btn btn-light btn-lg w-100 rounded-0 rounded-end text-secondary">
          Credit packs
        </button>
      </div>
      <div className="col-4 p-0">
        <button type="button" className="btn btn-primary btn-lg w-100 rounded-0 rounded-start">
          'EDIT & PLOT' Subscription
        </button>
      </div>
    </div>
  )
}

export default FreePeriodButtons