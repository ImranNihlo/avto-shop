import React from 'react'
import "../../../../MyPage/myPage.css"

function PeriodInquiry (props) {
  return (
    <>
      <hr className="m-0"/>
      <div className="row justify-content-between bg-light border-bottom border-top pt-3 pb-2">
        <div className="col align-self-center">
          <div className="row justify-content-between mx-1 mb-1">
            <div className="col-2 text-center border start-radius pt-2 pb-2 cursor">
              All
            </div>
            <div className="col-2 text-center border-top border-bottom pt-2 pb-2 cursor">
              Today
            </div>
            <div className="col-2 text-center border pt-2 pb-2 cursor">
              Week
            </div>
            <div className="col-2 border-top border-bottom pt-2 pb-2 px-2 upload-header-active cursor">
              1Month
            </div>
            <div className="col-2 border end-radius pt-2 pb-2 px-2 cursor">
              3Month
            </div>
            <div className="col-2">

            </div>
          </div>
        </div>
        <div className="col text-end">
          <input type="date" className="border rounded pt-2 pb-2"/>
          <span className="px-2">
            ~
          </span>
          <input type="date" className="border rounded pt-2 pb-2"/>
          <button type="button" className="btn btn-primary btn-sm fw-bold mx-2 pt-2 pb-2 mb-1">
            INQUIRY
          </button>
        </div>
      </div>
    </>
  )
}

export default PeriodInquiry