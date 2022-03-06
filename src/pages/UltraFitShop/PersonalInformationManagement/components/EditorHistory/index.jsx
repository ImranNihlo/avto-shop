import React from 'react'

function EditorHistory (props) {
  return (
    <div className="col-8 p-0">
      <div className="border bg-light radius-1v shadow">
        <div className="row bg-colors fw-bold pt-3 pb-3 border-title mx-0">
          <div className="col-7 text-center">
            Editor subscription title
          </div>
          <div className="col-3 text-center">
            Subscription period
          </div>
          <div className="col-2 text-center">
            Payment date
          </div>
        </div>
        <div className="row fw-bold pt-3 pb-3 border-top mx-0">
          <div className="col-7 px-4">
            30-DAYS FREE TRIAL
          </div>
          <div className="col-3 text-center">
            2021.12.01 ~ 2021.12.31
          </div>
          <div className="col-2 text-center">
            2021.12.31
          </div>
        </div>
        <div className="row fw-bold pt-3 pb-3 border-top mx-0">
          <div className="col-7 px-4">
            30-DAYS FREE TRIAL
          </div>
          <div className="col-3 text-center">
            2021.11.01 ~ 2021.11.30
          </div>
          <div className="col-2 text-center">
            2021.12.01
          </div>
        </div>
        <div className="row fw-bold pt-3 pb-3 border-top mx-0">
          <div className="col-7 px-4">
            30-DAYS FREE TRIAL
          </div>
          <div className="col-3 text-center">
            2021.10.01 ~ 2021.10.31
          </div>
          <div className="col-2 text-center">
            2021.10.31
          </div>
        </div>
        <div className="row fw-bold pt-3 pb-3 border-top mx-0">
          <div className="col-7 px-4">
            30-DAYS FREE TRIAL
          </div>
          <div className="col-3 text-center">
            2021.09.01 ~ 2021.09.30
          </div>
          <div className="col-2 text-center">
            2021.09.30
          </div>
        </div>
      </div>
      <div className="text-center mt-5">
        <button type="button" className="btn btn-primary col-4 height radius-2v fw-bold">
          CANCEL SUBSCRIPTION
        </button>
      </div>
    </div>
  )
}

export default EditorHistory