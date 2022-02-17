import React from 'react'
import power from "./images/power.svg"

function ContentHeader (props) {
  return (
    <div className="container content-position">
      <div className="row justify-content-between">
        <div className="card-body col-2">
          <h5 className="card-title">Location</h5>
          <p className="card-text">Select Location</p>
        </div>
        <div className="card-body col-2">
          <h5 className="card-title">Year</h5>
          <p className="card-text">Select Year</p>
        </div>
        <div className="card-body col-2">
          <h5 className="card-title">Mark</h5>
          <p className="card-text">Select Mark</p>
        </div>
        <div className="card-body col-2">
          <h5 className="card-title">Model</h5>
          <p className="card-text">Select Model</p>
        </div>
        <div className="card-body col-2">
          <h5 className="card-title">Sub-Model</h5>
          <p className="card-text">Select Sub-Model</p>
        </div>
        <div className="card-body col-2">
          <h5 className="card-title">Series</h5>
          <p className="card-text">Select Series</p>
        </div>
      </div>
      <hr />
      <div className="row justify-content-end align-items-baseline position-bottom">
        <div className="col-1 reset_button">
          <div className='col-4'>
            <img src={power} alt="power"/>
          </div>
          <div className='col-4'>
            <p>RESET</p>
          </div>
        </div>
        <div className="col-1">
          <button type="button" className="btn btn-primary btn-home">Search</button>
        </div>
      </div>
    </div>
  )
}

export default ContentHeader
