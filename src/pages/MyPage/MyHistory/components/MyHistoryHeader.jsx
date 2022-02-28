import React from 'react'

function MyProjectHeader (props) {
  return (
    <div className="col-8 row justify-content-between p-0">
      <div className="col-2 p-0">
        <h2>
          HISTORY
        </h2>
      </div>
      <div className="col-10 row justify-content-end align-self-center p-0">
        <div className="col-5 text-end p-0">
          <span className="px-2">
            Period inquiry
          </span>
          <input type="date" name="calendar" className="border-0 rounded pt-1 pb-1"/>
        </div>
        <div className="col-4 p-0 text-end">
          <span className="px-2">
            ~
          </span>
          <input type="date" name="calendar" className="border-0 rounded pt-1 pb-1"/>
          <button type="button" className="btn btn-primary btn-sm fw-bold mb-1 mx-2">
            INQUIRY
          </button>
        </div>
      </div>
      {/*<div className="col align-self-center">*/}
      {/*  Period inquiry*/}
      {/*</div>*/}
      {/*<div className="col">*/}
      {/*  <input type="date" name="calendar" className="border-0"/>*/}
      {/*</div>*/}
      {/*<div className="col-1 dash">*/}
      {/*  ~*/}
      {/*</div>*/}
      {/*<div className="col-3">*/}
      {/*  <input type="date" name="calendar" className="border-0"/>*/}
      {/*</div>*/}
      {/*<div className="col align-self-center text-end">*/}
      {/*  <button type="button" className="btn btn-primary btn-sm fw-bold width-button">*/}
      {/*    INQUIRY*/}
      {/*  </button>*/}
      {/*</div>*/}
    </div>
  )
}

export default MyProjectHeader