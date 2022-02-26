import React from 'react'
import Card from '../../HomePage/components/Card'
import Cards from '../../HomePage/Cards'

function UploadBottomRow (props) {
  return (
    <div className="row justify-content-between mb-5">
      <div className="col-2">
        <div className="row justify-content-between col-10 bg-light pt-3 pb-3 border-bottom sidebar-border-top shadow">
          <div className="col-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
          </div>
          <div className="col">
            <label className="form-check-label" htmlFor="flexCheckDefault">
              Full Package (2)
            </label>
          </div>
        </div>
        <div className="row justify-content-between col-10 bg-light pt-3 pb-3 shadow">
          <div className="col-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault1"/>
          </div>
          <div className="col-8">
            <label className="form-check-label" htmlFor="flexCheckDefault1">
              Out Front(20)
            </label>
          </div>
          <div className="col-2">
            <button className="btn btn-secondary dropdown-toggle bg-light border-0 text-black p-0"
                    type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
              <a className="dropdown-item" href="#">Something else here</a>
            </div>
          </div>
        </div>
        <div className="row justify-content-between col-10 bg-light pt-3 pb-3 border-top border-bottom shadow">
          <div className="col-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault2"/>
          </div>
          <div className="col-8">
            <label className="form-check-label" htmlFor="flexCheckDefault2">
              Out Side (9)
            </label>
          </div>
          <div className="col-2">
            <button className="btn btn-secondary dropdown-toggle bg-light border-0 text-black p-0"
                    type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
              <a className="dropdown-item" href="#">Another action</a>
            </div>
          </div>
        </div>
        <div className="row justify-content-between col-10 bg-light pt-3 pb-3 shadow">
          <div className="col-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault3"/>
          </div>
          <div className="col-8">
            <label className="form-check-label" htmlFor="flexCheckDefault3">
              Out Rear (20)
            </label>
          </div>
          <div className="col-2">
            <button className="btn btn-secondary dropdown-toggle bg-light border-0 text-black p-0"
                    type="button" id="dropdownMenuButton"
                    data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
            </button>
            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              <a className="dropdown-item" href="#">Action</a>
            </div>
          </div>
        </div>
        <div className="row justify-content-between col-10 bg-light pt-3 pb-3 sidebar-border-bottom border-top shadow">
          <div className="col-1">
            <input className="form-check-input" type="checkbox" value="" id="flexCheckDefault4"/>
          </div>
          <div className="col">
            <label className="form-check-label" htmlFor="flexCheckDefault4">
              Inner (4)
            </label>
          </div>
        </div>
      </div>
      {/*<div className="col-8 text-center text-secondary align-self-center">*/}
      {/*  <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" fill="currentColor"*/}
      {/*       className="bi bi-exclamation-circle mb-2" viewBox="0 0 16 16">*/}
      {/*    <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>*/}
      {/*    <path*/}
      {/*      d="M7.002 11a1 1 0 1 1 2 0 1 1 0 0 1-2 0zM7.1 4.995a.905.905 0 1 1 1.8 0l-.35 3.507a.552.552 0 0 1-1.1 0L7.1 4.995z"/>*/}
      {/*  </svg>*/}
      {/*  <h6>*/}
      {/*    No uploaded patterns yet*/}
      {/*  </h6>*/}
      {/*</div>*/}
      <div className="col-8 p-0">
        <div className="row justify-content-between">
          <Cards />
        </div>
      </div>
      <div className="col-2">

      </div>
    </div>
  )
}

export default UploadBottomRow