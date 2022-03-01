import React from 'react'
import "../../../../MyPage/myPage.css"

function PeriodInquiry (props) {
  return (
    <>
      <hr className="m-0"/>
      <div className="row justify-content-between bg-light border-bottom border-top pt-3 pb-2">
        <div className="col align-self-center">
          <div className="row justify-content-between mx-1">
            <div className="btn-group bg-light p-0" role="group" aria-label="Basic checkbox toggle button group">
              <input type="checkbox" className="btn-check" id="btncheck11" autoComplete="off"/>
              <label className="btn btn-outline-primary border" htmlFor="btncheck11">
                All
              </label>

              <input type="checkbox" className="btn-check" id="btncheck12" autoComplete="off"/>
              <label className="btn btn-outline-primary border" htmlFor="btncheck12">
                Today
              </label>

              <input type="checkbox" className="btn-check" id="btncheck13" autoComplete="off"/>
              <label className="btn btn-outline-primary border" htmlFor="btncheck13">
                Week
              </label>

              <input type="checkbox" className="btn-check" id="btncheck14" autoComplete="off"/>
              <label className="btn btn-outline-primary border" htmlFor="btncheck14">
                1Month
              </label>

              <input type="checkbox" className="btn-check" id="btncheck15" autoComplete="off"/>
              <label className="btn btn-outline-primary border" htmlFor="btncheck15">
                3Month
              </label>
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