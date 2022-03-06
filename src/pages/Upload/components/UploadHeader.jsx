import React from 'react'

function UploadHeader (props) {
  return (
    <div className="col-8 mb-5 p-0 fw-bold">
      <h2 className="fw-bold">
        SELL PATTERN
      </h2>
      <hr/>
      <div className="row justify-content-between mx-0">
        <div className="col-2 border start-radius font-size-13 text-center height height-pt bg-light cursor">
          My pattern
        </div>
        <div className="col-2 border-top border-bottom font-size-13 text-center height height-pt bg-light cursor">
          Number of sales
        </div>
        <div className="col-2 border font-size-13 text-center height height-pt bg-light cursor">
          Pattern approval status
        </div>
        <div className="col-2 border-top border-bottom font-size-13 text-center height height-pt bg-light cursor">
          Sponsor AD item
        </div>
        <div className="col-2 border font-size-13 text-center height height-pt bg-light cursor">
          Payout request
        </div>
        <div className="col-2 border border-start-0 end-radius font-size-13 text-center
                        cursor height height-pt upload-header-active">
          Transaction history
        </div>
      </div>
    </div>
  )
}

export default UploadHeader