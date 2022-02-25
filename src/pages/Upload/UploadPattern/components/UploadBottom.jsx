import React from 'react'

function UploadBottom (props) {
  return (
    <>
      <h6 className="fw-bold px-4 mt-4">
        Description
      </h6>
      <div className="form-group px-4">
        <textarea className="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="Enter">

        </textarea>
      </div>
      <h6 className="fw-bold px-4 mt-4 m-0">
        Tag
      </h6>
      <div className="form-check">
        <small id="emailHelp" className="form-text text-secondary">
          * Up to 5 tags can be registered.
        </small>
      </div>
      <div className="form-group row justify-content-start mb-3">
        <div className="col-5">
          <div className="row justify-content-between m-0 border-row rounded">
            <div className="col-9 p-0">
              <input type="email" className="form-control border-0"
                     id="exampleInputEmail1"
                     aria-describedby="emailHelp"/>
            </div>
            <div className="col-3 align-self-center text-center">
              <button type="button" className="btn btn-primary btn-sm radius-1v px-3 p-0">
                ADD
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="col-12 justify-content-start px-4">
        <div className="col-6">
          <button type="button" className="btn btn-light border-secondary tags-size pb-0 pt-1">
            mercedesbenz
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-x-circle mx-2 cursor mb-1 text-secondary mt-1"
                 viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <button type="button" className="btn btn-light border-secondary tags-size pb-0 pt-1">
            amg
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-x-circle mx-2 cursor mb-1 text-secondary mt-1"
                 viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <button type="button" className="btn btn-light border-secondary tags-size pb-0 pt-1">
            benz
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-x-circle mx-2 cursor mb-1 text-secondary mt-1"
                 viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
          <button type="button" className="btn btn-light border-secondary tags-size pb-0 pt-1">
            cclass
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor"
                 className="bi bi-x-circle mx-2 cursor mb-1 text-secondary mt-1"
                 viewBox="0 0 16 16">
              <path d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z"/>
              <path
                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z"/>
            </svg>
          </button>
        </div>
      </div>
    </>
  )
}

export default UploadBottom