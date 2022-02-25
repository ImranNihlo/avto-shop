import React from 'react'

function UploadPatternsHeader (props) {
  return (
    <>
      <h2 className="fw-bold m-0">
        UPLOAD PATTERN
      </h2>
      <div className="form-check p-0">
        <small id="emailHelp" className="form-text text-secondary fw-bold">
          You can upload up to 5 patterns for the selected car model.
        </small>
      </div>
      <hr/>
    </>
  )
}

export default UploadPatternsHeader