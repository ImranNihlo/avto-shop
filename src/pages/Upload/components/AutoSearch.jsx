import React from 'react'
import power from '../../HomePage/images/power.svg'

function AutoSearch (props) {
  return (
    <div className="col-8 p-0 mb-4">
      <div className="row justify-content-between mt-5 mb-4">
        <h5 className="col m-0 align-self-center fw-bold">
          MY PATTERN LIST (0)
        </h5>
        <div className="col text-end">
          <button type="button" className="btn btn-warning text-white radius-1v">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-plus-circle mb-1 mx-1" viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M8 4a.5.5 0 0 1 .5.5v3h3a.5.5 0 0 1 0 1h-3v3a.5.5 0 0 1-1 0v-3h-3a.5.5 0 0 1 0-1h3v-3A.5.5 0 0 1 8 4z"/>
            </svg>
            UPLOAD PATTERN
          </button>
        </div>
      </div>
      <div className="row border bg-light radius-1v pt-2 pb-2 px-4 m-0 shadow">
        <div className="row justify-content-between mb-3">
          <div className="col">
            <p className="m-0 fw-bold">
              Location
            </p>
            <p className="m-0">
              CANADA & USA
            </p>
          </div>
          <div className="col border-start border-end">
            <p className="m-0 fw-bold">
              Year
            </p>
            <p className="m-0">
              2020
            </p>
          </div>
          <div className="col">
            <p className="m-0 fw-bold">
              Make
            </p>
            <p className="m-0">
              BMW
            </p>
          </div>
          <div className="col border-start border-end">
            <p className="m-0 fw-bold">
              Model
            </p>
            <p className="m-0">
              MDX
            </p>
          </div>
          <div className="col border-end">
            <p className="m-0 fw-bold">
              Sub-Model
            </p>
            <p className="m-0">
              GLC COUPE
            </p>
          </div>
          <div className="col">
            <p className="m-0 fw-bold">
              Series
            </p>
            <p className="m-0">
              AMG GLC 43
            </p>
          </div>
        </div>
        <hr/>
        <div className="text-end">
          <button className="btn mx-2 radius-1v fw-bold">
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" className="bi bi-power"
                 viewBox="0 0 16 16">
              <path d="M7.5 1v7h1V1h-1z"/>
              <path
                d="M3 8.812a4.999 4.999 0 0 1 2.578-4.375l-.485-.874A6 6 0 1 0 11 3.616l-.501.865A5 5 0 1 1 3 8.812z"/>
            </svg>
            Reset
          </button>
          <button type="button" className="btn btn-primary btn-home fw-bold">SEARCH</button>
        </div>
      </div>
    </div>
  )
}

export default AutoSearch