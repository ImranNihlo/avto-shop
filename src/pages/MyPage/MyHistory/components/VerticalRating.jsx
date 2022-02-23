import React from 'react'

function VerticalRating (props) {
  return (
    <div className="col-6 text-center fw-bold border-start mb-3">
      <h6 className="fw-bold mb-3">
        Customer rating
      </h6>
      <div className="vr vr-line vr-width rounded">
        <div className="rounded bg-warning vr-height-5">

        </div>
        5
      </div>
      <div className="vr vr-line vr-width rounded">
        <div className="rounded bg-warning vr-height-4">

        </div>
        4
      </div>
      <div className="vr vr-line vr-width rounded">
        <div className="rounded bg-warning vr-height-3">

        </div>
        3
      </div>
      <div className="vr vr-line vr-width rounded">
        <div className="rounded bg-warning vr-height-2">

        </div>
        2
      </div>
      <div className="vr vr-line vr-width rounded">
        <div className="vr-height-2">

        </div>
        1
      </div>
    </div>
  )
}

export default VerticalRating