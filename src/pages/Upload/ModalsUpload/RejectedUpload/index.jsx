import React from 'react'
import "../modalsUpload.css"

function RejectedUpload (props) {
  return (
    <div className="modal-block">
      <div className="modal-block-content bg-light radius-1v col-3 text-center pt-4">
        <div className="border-bottom">
          <h5 className="px-5">
            REJECTED
          </h5>
          <p className="px-5">
            The pattern you applied for was rejected because it was judged impossible during the cutting process.
          </p>
        </div>
        <button type="button" className="btn btn-primary radius-1v px-4 mt-3 mb-3">CONFIRM</button>
      </div>
    </div>
  )
}

export default RejectedUpload