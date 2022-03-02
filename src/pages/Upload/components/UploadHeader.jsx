import React from 'react'

function UploadHeader (props) {
  return (
    <div className="col-8 mb-5 p-0 fw-bold">
      <h2 className="fw-bold">
        SELL PATTERN
      </h2>
      <hr/>
      <div className="row justify-content-between mx-0">
        <div className="col-2 border start-radius font-size-13 text-center height bg-light cursor">
          My pattern
        </div>
        <div className="col-2 border-top border-bottom font-size-13 text-center height bg-light cursor">
          Number of sales
        </div>
        <div className="col-2 border font-size-13 text-center height bg-light cursor">
          Pattern approval status
        </div>
        <div className="col-2 border-top border-bottom font-size-13 text-center height bg-light cursor">
          Sponsor AD item
        </div>
        <div className="col-2 border font-size-13 text-center height bg-light cursor">
          Payout request
        </div>
        <div className="col-2 border border-start-0 end-radius font-size-13 text-center
                        cursor height upload-header-active">
          Transaction history
        </div>
        {/*<div className="btn-group bg-light p-0" role="group" aria-label="Basic checkbox toggle button group">*/}
        {/*  <input type="checkbox" className="btn-check" id="btncheck1" autoComplete="off"/>*/}
        {/*  <label className="btn btn-outline-primary border height" htmlFor="btncheck1">*/}
        {/*    My pattern*/}
        {/*  </label>*/}

        {/*  <input type="checkbox" className="btn-check" id="btncheck2" autoComplete="off"/>*/}
        {/*  <label className="btn btn-outline-primary border height" htmlFor="btncheck2">*/}
        {/*    Number of sales*/}
        {/*  </label>*/}

        {/*  <input type="checkbox" className="btn-check" id="btncheck3" autoComplete="off"/>*/}
        {/*  <label className="btn btn-outline-primary border height" htmlFor="btncheck3">*/}
        {/*    Pattern approval status*/}
        {/*  </label>*/}

        {/*  <input type="checkbox" className="btn-check" id="btncheck4" autoComplete="off"/>*/}
        {/*  <label className="btn btn-outline-primary border height" htmlFor="btncheck4">*/}
        {/*    Sponsor AD item*/}
        {/*  </label>*/}

        {/*  <input type="checkbox" className="btn-check" id="btncheck5" autoComplete="off"/>*/}
        {/*  <label className="btn btn-outline-primary border height" htmlFor="btncheck5">*/}
        {/*    Payout request*/}
        {/*  </label>*/}

        {/*  <input type="checkbox" className="btn-check" id="btncheck6" autoComplete="off"/>*/}
        {/*  <label className="btn btn-outline-primary border height" htmlFor="btncheck6">*/}
        {/*    Transaction history*/}
        {/*  </label>*/}
        {/*</div>*/}
      </div>
    </div>
  )
}

export default UploadHeader